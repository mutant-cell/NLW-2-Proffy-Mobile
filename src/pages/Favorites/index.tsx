import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        style={styles.teacherList}
      >
        {favorites.map((teacherItem: Teacher) => {
          return (
            <TeacherItem
              key={teacherItem.id}
              teacher={teacherItem}
              favorited={true}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;

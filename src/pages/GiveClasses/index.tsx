import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./styles";

import giveClassesBackground from "../../assets/images/give-classes-background.png";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function GiveClasses() {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBackground}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, voce precisa se cadastrar como professor na nossa
          plataforma web
        </Text>
      </ImageBackground>
      <RectButton onPress={goBack} style={styles.okBoomer}>
        <Text style={styles.okBoomerText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;

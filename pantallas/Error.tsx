import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import Formulario from "./Formulario";
const Error = () => {
  return (
    <View style={{ display: "flex" }}>
      <LinearGradient
        // Button Linear Gradient
        colors={["#1e14c5", "#701ecf", "#dc2bdc", "#fdc675"]}
        locations={[-0.74, -0.1, 0.52, 1.36]}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.conteiner}
      >
        <ImageBackground
          style={{ width: 170, height: 20 }}
          source={require("../assets/logo-white.png")}
        />

        <Text style={styles.Texto}>Página en Reparación </Text>
      </LinearGradient>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  conteiner: {
    width: 379,
    height: 720,
    padding: 15,
    alignItems: "center",
  },
  Texto: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    color:"#fff", 
    fontSize:30,
    marginTop: 190,
  },
});

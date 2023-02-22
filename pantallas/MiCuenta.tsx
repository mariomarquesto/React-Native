import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { ButtonGroup } from '@rneui/themed'
import { navigate } from "@storybook/addon-links/dist/preview";

const MiCuenta = ({ navigation }: any) => {
  const { navigate } = useNavigation<any>();
  return (

    
    <LinearGradient
      // Button Linear Gradient
      colors={["#1e14c5", "#701ecf", "#dc2bdc", "#fdc675"]}
      locations={[-0.74, -0.1, 0.52, 1.36]}
      start={[0, 1]}
      end={[1, 0]}
      style={styles.conteiner}
    >
      <Image
        style={{ width: 170, height: 20 }}
        source={require("../assets/logo-white.png")}
      />

      <View style={styles.rectangle}>
        <Text style={{ color: "#551bcc", fontSize: 18, textAlign: "center" }}>
          Mi perfil
        </Text>

        <Text style={{ color: "#551bcc", fontSize: 18, marginBottom: 10 }}>
          Datos Personales
        </Text>
        <Image
          source={require("../assets/linea-progreso-1.png")}
          style={{ width: 300, height: 22, marginLeft: 30 }}
        />
        <Text
          style={styles.Items}
        >
          Fecha de nacimiento
        </Text>

        <TextInput
          style={styles.nombresyapellidos}
          placeholder="DD/MM/AAA"
          keyboardType="default"
        />
        <Text style={styles.Items}>Sexo</Text>

        <TextInput
          style={styles.nombresyapellidos}
          placeholder="Selecciona tu sexo"
          keyboardType="default"
        />

        <Text style={styles.Items}>País</Text>

        <TextInput
          style={styles.nombresyapellidos}
          placeholder="Selecciona tu País"
          keyboardType="default"
        />
        <Text style={styles.Items}> Ciudad</Text>

        <TextInput
          style={styles.nombresyapellidos}
          placeholder="Selecciona tu Ciudad"
          keyboardType="default"
        />
        <Text style={styles.Items}> Domicilio</Text>

        <TextInput
          style={styles.nombresyapellidos}
          placeholder="Ingresa tu Domicilio"
          keyboardType="default"
        />

        <TouchableOpacity>
          <Text onPress={() => navigation.openDrawer()} style={styles.volver}>
            {" "}
            Volver
          </Text>
          
        </TouchableOpacity>


      </View>
    </LinearGradient>
  );
};


export default MiCuenta;

const styles = StyleSheet.create({
  conteiner: {
    width: "100%",
    height: "100%",
    padding: 15,
    alignItems: "center",
  },
  rectangle: {
    width: 350,
    height: 531,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginTop: 53,
  },

  nombresyapellidos: {
    color: "dark",
    fontSize: 13,
    marginTop: 3,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "600",
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,

    paddingRight: 12,
  },
  volver: {
    color: "#551bcc",
    textAlign: "center",
    marginBottom: 1,
    fontSize: 20,
  },
  Items: {
    color: "#551bcc",
    fontSize: 13,
    marginBottom: 3,
    marginLeft: 20,
    marginRight: 20,
  },
});

import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { text } from "@storybook/addon-knobs";
import { CantidadDeCuotasSimulado } from "./cantidadDeCuotasSimulado";

export const PrestamoSimulado = (): React.ReactElement => {
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
        <Image
          style={{ width: 170, height: 20 }}
          source={require("../assets/logo-white.png")}
        />
      </LinearGradient>

      <Text style={styles.Titulo}>PRESTAMO SIMULADO</Text>
      <Text style={styles.pesos}>$ 54.800</Text>
      <CantidadDeCuotasSimulado />
      <TouchableOpacity style={styles.prestamos}>
        <Text style={styles.botonPrestamo}>Solicitar Prestamo</Text>
      </TouchableOpacity>
      <Image
        style={{ width: 300, height: 20, marginTop: 50 }}
        source={require("../assets/ticket.png")}
      />
      <Image
        style={{ width: 191, height: 127, marginTop: 100 }}
        source={require("../assets/sm-degrade1.png")}
      />
      <Text style={styles.foootertext}>
        <Image
          style={{ width: 24, height: 24,}}
          source={require("../assets/ubicacion.png")}
        />
        Lavalle 815, Yerba Buena, Tucumán
      </Text>

      <Text style={styles.foootertext}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/emails.jpg")}
        />
        hello@sundaymoney.com{" "}
      </Text>

      <Text style={styles.foootertext}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/tel.png")}
        />
        0381 425{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    width: 300,
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  Titulo: {
    textAlign: "center",
    color: "#551bcc",
    marginBottom: 15,
  },
  pesos: {
    fontSize: 29,
    textAlign: "center",
  },
  textoCuotas: {
    width: 70,
    heightw: 70,
    textAlign: "center",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    marginBottom: 23,
  },
  numeroCuotas: {},
  prestamos: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 40,
    marginTop: 100,
    backgroundColor: "#551bcc",
    padding: 5,
    borderRadius: 5,
    alignSelf: "center",
  },
  botonPrestamo: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
  },
  contenedorView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  foootertext: {
    fontSize: 10,
   
  },
});

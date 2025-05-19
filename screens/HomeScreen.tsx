import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import PrestamoButton from "../components/PrestamoButton";
import PasoItem from "../components/PasoItem";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.Image}
          source={require("../assets/pexels-fauxels-3184465.jpg")}
        >
          <PrestamoButton />
        </ImageBackground>

        <Text style={styles.title}>Cómo sacar tu primer préstamo</Text>
        <Image style={styles.icon} source={require("../assets/1.png")} />
        <PasoItem image={require("../assets/registrate.png")} text="Registrate" />
        <Image style={styles.icon} source={require("../assets/2.png")} />
        <PasoItem image={require("../assets/registrate.png")} text="Seleccioná tu Préstamo" />

        <Text>Beneficios</Text>
        <PrestamoButton />

        <Text style={styles.step}>Validá tus datos 1</Text>
        <Text style={styles.step}>Accedé a tu crédito</Text>
        <Text>Validá tus datos 3</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  Image: {
    width: 382,
    height: 300,
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "#f1f1f1f1",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  icon: {
    width: 33,
    height: 33,
    marginLeft: 190,
  },
  step: {
    width: 280,
    height: 50,
    backgroundColor: "powderblue",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 5,
    marginVertical: 5,
  },
});

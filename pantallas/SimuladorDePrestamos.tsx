import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonGroup } from "@rneui/themed";
import { useState } from "react";

const SimuladorDePrestamos = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

  return (
    <View style={styles.conteiner}>
      <Text style={styles.Titulo}> Simulador de préstamos </Text>
      <Text>
        Monto <Text style={styles.cantidad}>$ 123456</Text>
      </Text>
      <Text>Cantidad de cuotas</Text>

      <ButtonGroup
        buttons={["1", "2", "3", "4", "5", "6"]}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />

      <TouchableOpacity>
        <View style={styles.contenedor}>
          <Text style={styles.asesor}>
            Contactar a un asesor..
            <Image
              style={styles.wasapp}
              source={require("../assets/whatsapp-icon.png")}
            />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    marginBottom: 13,
  },
  contenedor: {
    width: 285,
    backgroundColor: "white",
    borderRadius: 13,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  Titulo: {
    textAlign: "center",
    color: "#551bcc",
    marginBottom: 15,
  },
  cantidad: {
    width: 150,
    height: 55,
    alignItems: "flex-start",
  
    marginTop: 17,
  },

  wasapp: {
    width: 22,
    height: 22,
    flexDirection: "row",
    marginLeft: 14,
  },
  asesor: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#25d366",
    border: "solid 2px #25d366",
    borderRadius: 7,
    paddingLeft: 12,
  },
});

export default SimuladorDePrestamos;

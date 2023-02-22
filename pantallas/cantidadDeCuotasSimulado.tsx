import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const CantidadDeCuotasSimulado = (): React.ReactElement => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.cuotasConteiner}>
        <Text style={styles.cuotasTextStyle}>Cuotas</Text>
        <Text style={styles.montoTextStyle}>6</Text>
      </View>
      <View style={styles.montoConteiner}>
        <Text style={styles.cuotasTextStyle}>Monto a devolver</Text>
        <Text style={styles.montoTextStyle}>$120.176,78</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cuotasConteiner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    width: 57,
    height: 69,
    paddingTop: 3,
    borderRadius: 10,
    borderColor: "#551bcc80",
    borderStyle: "solid",
    borderWidth: 1,
  },
  montoConteiner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 69,
    paddingTop: 3,
    borderRadius: 10,
    borderColor: "#551bcc80",
    borderStyle: "solid",
    borderWidth: 1,
  },

  cuotasTextStyle: {
    fontSize: 9,
    color:"#551bcc80"
  },
  montoTextStyle: {
    fontSize: 18,
  }
});

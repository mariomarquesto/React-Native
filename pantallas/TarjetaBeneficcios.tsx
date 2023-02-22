import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Badge } from "@rneui/themed";

const TarjetaBeneficios = () => {
  return (
    <View style={{ marginBottom: 33, marginTop: 13 }}>
   
      <View style={styles.contenedor}>
        <Badge
          status="primary"
          value={1}
          containerStyle={styles.badgeContenedor}
          badgeStyle={styles.badge}
          textStyle={styles.badgeTextStyle}
        />
        <Text style={styles.requisitosTexto}>Registrate</Text>
      </View>
   
      <View style={styles.contenedor}  >
        <Badge
          status="primary"
          value={2}
          containerStyle={styles.badgeContenedor2}
          badgeStyle={styles.badge}
          textStyle={styles.badgeTextStyle}
        />
        <Text style={styles.requisitosTexto}>Seleccioná tu préstamo</Text>
      </View>
     
      <View style={styles.contenedor}  >
        <Badge
          status="primary"
          value={3}
          containerStyle={styles.badgeContenedor2}
          badgeStyle={styles.badge}
          textStyle={styles.badgeTextStyle}
        />
        <Text style={styles.requisitosTexto}>Valida tus datos</Text>
      </View>
     
      <View style={styles.contenedor}  >
        <Badge
          status="primary"
          value={4}
          containerStyle={styles.badgeContenedor2}
          badgeStyle={styles.badge}
          textStyle={styles.badgeTextStyle}
        />
        <Text style={styles.requisitosTexto}>Accedé a tu crédito</Text>
      </View>
     
     
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    width: 285,
    backgroundColor: "white",
    borderRadius: 13,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom:20,
  },
  requisitosTexto: {
    width: 280,
    height: 50,
    backgroundColor: " #FFFFFF80",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 5,
    marginTop: 33,
  },
  badgeContenedor: { position: "absolute", top: -16, left: 235 },
  badge: {
    width: 38,
    height: 38,
    borderRadius: 50,
    backgroundColor: "#ed3cd3",
  },
  badgeTextStyle: { fontSize: 12, margin: 5 },
  badgeContenedor2: { position: "absolute", top: -16, left: 235 },
  
});
export default TarjetaBeneficios;

import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const EsFacil = () => {
  return (
    <View>
      <View style={styles.contenedor}>
        <Text style={styles.Titulo}>Es fácil</Text>
        <Text style={styles.Lorem}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          optio temporibus, molestias ab omnis quaerat! Tenetur molestias
          consequatur inventore quisquam a, ratione dolor explicabo nobis
          magnam. Error explicabo maiores velit!
        </Text>
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.Lorem}>A tu medida</Text>
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.Lorem}>Ahorra tiempo</Text>
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.Lorem}>Flexible</Text>
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.Lorem}>Lorem Ipsum</Text>
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.Lorem}>Lorem Ipsum</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 13,
    boxShadow: "0 0 40px 0 rgba(91, 80, 253, 0.1)",

    backgroundColor: "#fff",
  },
  Titulo: {
    color: "#ed3cd3",
    marginLeft: 7,
  },
  Lorem: {
    textAlign: "left",
    //border: "solid 2px #ed3cd3",
    marginLeft: 17,
    borderBottomWidth: 3,
    borderBottomColor: "#ed3cd3",
    borderRadius: 13,
    marginTop: 15,
    marginBottom: 2,
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
});
export default EsFacil;

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function PrestamoButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Simular Préstamos</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 40,
    backgroundColor: "#551bcc",
    padding: 5,
    borderRadius: 5,
    marginTop: 100,
  },
  text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

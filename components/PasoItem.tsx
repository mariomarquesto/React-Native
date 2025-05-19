import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function PasoItem({ image, text }: { image: any; text: string }) {
  return (
    <Text style={styles.text}>
      <Image source={image} style={styles.image} /> {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 13,
    marginVertical: 5,
    padding: 5,
  },
  image: {
    width: 22,
    height: 24,
    marginRight: 8,
  },
});

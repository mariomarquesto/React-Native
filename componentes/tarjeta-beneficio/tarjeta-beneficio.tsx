import { View, Text, Image } from "react-native";
import React from "react";
import { tarjetaBeneficioStyles } from "./tarjeta-beneficio.styles";

export interface ITarjetaBeneficioProps {
  titulo: string;
  contenido: string;
  imageUrl: string;
  badgeValue: string;
}

export const TarjetaBeneficio = (
  props: ITarjetaBeneficioProps
): React.ReactElement => {
  const { titulo, contenido, imageUrl, badgeValue } = props;

  return (
    <View style={tarjetaBeneficioStyles.contenedorStyle}>
      <Image source={require(imageUrl)}></Image>
      <Text>{titulo}</Text>
    </View>
  );
};

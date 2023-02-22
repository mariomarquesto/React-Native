import * as React from 'react';
import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import { ITarjetaBeneficioProps, TarjetaBeneficio } from "./tarjeta-beneficio";

const tarjetaBenecifioProps: ITarjetaBeneficioProps = {
  titulo: "titulo",
  contenido: "contenido",
  imageUrl: "./assets/registrate.png",
  badgeValue: "1",
};

storiesOf("Tarjetas/Beneficio", module)
  .addDecorator((story) => <View>{story()}</View>)
  .add("default", () => <TarjetaBeneficio {...tarjetaBenecifioProps} />);

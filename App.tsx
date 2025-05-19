// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import useCustomFonts from "./hooks/useCustomFonts";
import HomeScreen from "./screens/HomeScreen";
import Beneficios from "./pantallas/Beneficios";
import Simulador from "./pantallas/Simulador";
import Nosotros from "./pantallas/Nosotros";
import Testimonios from "./pantallas/Testimonios";
import Ayuda from "./pantallas/Ayuda";
import Ingresar from "./pantallas/Ingresar";

const Drawer = createDrawerNavigator();

export default function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Beneficios" component={Beneficios} />
        <Drawer.Screen name="Simulador" component={Simulador} />
        <Drawer.Screen name="Nosotros" component={Nosotros} />
        <Drawer.Screen name="Testimonios" component={Testimonios} />
        <Drawer.Screen name="Ayuda" component={Ayuda} />
        <Drawer.Screen name="Ingresar" component={Ingresar} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

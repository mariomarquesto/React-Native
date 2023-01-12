import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_500Medium,
  OpenSans_500Medium_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
} from "@expo-google-fonts/open-sans";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ScrollView } from "react-native";
import "react-native-gesture-handler";

import Ayuda from "./pantallas/Ayuda";
import Beneficios from "./pantallas/Beneficios";
import Ingresar from "./pantallas/Ingresar";
import Nosotros from "./pantallas/Nosotros";
import Simulador from "./pantallas/Simulador";
import Testimonios from "./pantallas/Testimonios";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_500Medium,
    OpenSans_500Medium_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function HomeScreen({ navigation }: any) {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: (props: any) => (
          <Image
            style={styles.logo}
            source={require("./assets/logo-white.png")}
          />
        ),
        headerStyle: {
          backgroundColor: "#551bcc",
        },
      });
    }, [navigation]);

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <ImageBackground
            style={styles.Image}
            source={require("./assets/pexels-fauxels-3184465.jpg")}
          >
            <TouchableOpacity style={styles.prestamos}>
              <Text style={styles.botonPrestamo}>Simular Prestamos</Text>
            </TouchableOpacity>
          </ImageBackground>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Como sacar tu primer prestamo
          </Text>
          <Image style={styles.uno} source={require("./assets/1.png")} />

          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              fontStyle: "normal",
              textAlign: "center",
              backgroundColor: "#f1f1f1f1",
              borderRadius: 13,
            }}
          >
            {" "}
            <Image
              style={styles.registrate}
              source={require("./assets/registrate.png")}
            ></Image>{" "}
            Registrate
          </Text>

          <Image style={styles.dos} source={require("./assets/2.png")} />

          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              fontStyle: "normal",
              textAlign: "center",
              backgroundColor: "#f1f1f1f1",
              borderRadius: 13,
            }}
          >
            {" "}
            <Image
              style={styles.registrate}
              source={require("./assets/registrate.png")}
            ></Image>{" "}
            Seleccioná tu Prestamo
          </Text>

          <Text>Beneficios</Text>
          <TouchableOpacity style={styles.prestamos}>
            <Text style={styles.botonPrestamo}>Simular Prestamos</Text>
          </TouchableOpacity>

          <Text
            style={{
              width: 250,
              height: 50,
              backgroundColor: "powderblue",
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Validá tus datos 1
          </Text>
          <Text
            style={{
              width: 280,
              height: 50,
              backgroundColor: "powderblue",
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius:5,
            }}
          >
            Accedé a tu crédito
          </Text>
          
          <Text>Validá tus datos 3</Text>
        </View>
      </ScrollView>
    );
  }

  function NotificationsScreen({ navigation }: any) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

  const Drawer = createDrawerNavigator();
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  Image: {
    width: 382,
    height: 300,
    flexDirection: "row",
    justifyContent: "center",
  },
  prestamos: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 40,
    marginTop: 100,
    backgroundColor: "#551bcc",
    padding: 5,
    borderRadius: 5,
  },
  uno: {
    width: 33,
    height: 33,
    marginLeft: 190,
  },
  dos: {
    width: 33,
    height: 33,
    marginLeft: 190,
  },
  tres: {},
  cuatro: {},
  registrate: {
    width: 22,
    height: 24,
    marginLeft: 40,
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
  },
  botonPrestamo: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
  },
  logo: {
    width: 200,
    height: 20,
  },
  ultimo: {},
  scrollView: {
    backgroundColor: "#f1f1f1f1",
    marginHorizontal: 20,
  },
});

import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { Input, Icon } from "@rneui/themed";

import { useNavigation } from "@react-navigation/native";

function Formulario({ navigation }: any) {
  const { navigate } = useNavigation<any>();

  return (
    <View style={styles.rectangle}>
      <Text style={styles.ingresar}>Ingresar</Text>
      <Input style={styles.nombreUsuario} placeholder="Nombre de usuario" />
      <Input
        style={styles.nombreUsuario}
        placeholder="Contraseña"
        secureTextEntry={true}
      />

      <Text style={{ marginBottom: 13 }}>
        ¿No tienes cuenta?
        <TouchableOpacity onPress={() => navigate("")}>
          <Text style={styles.nombreUsuario}>Registrate aqui</Text>
        </TouchableOpacity>
      </Text>

      <Text style={styles.nombreUsuario}>¿Olvidaste tu contraseña?</Text>
      <TouchableOpacity
        style={styles.boton}
        onPress={() => () => navigation()}
      >
        <Text style={styles.botonIngresar}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Formulario;
const styles = StyleSheet.create({
  rectangle: {
    width: 350,
    height: 390,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginTop: 93,
    paddingLeft: 19,
    paddingRight: 19,
  },

  ingresar: {
    color: "#551bcc",
    textAlign: "center",
    marginBottom: 1,
    fontSize: 20,
  },
  nombreUsuario: {
    color: "#551bcc",
    fontFamily: "Monserrat",
    textAlign: "left",
    fontSize: 9,
  },
  botonIngresar: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
  },
  boton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 40,
    marginTop: 60,
    backgroundColor: "#551bcc",
    padding: 5,
    borderRadius: 5,
    alignSelf: "center",
  },
});

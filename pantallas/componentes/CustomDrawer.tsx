import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ScrollView } from "react-native";

const CustomDrawer = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#551bcc" }}
      >
        <View style={{}}>
          <Image
            source={require("../../assets/prueba.jpg")}
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
              marginBottom: 10,
              marginLeft: 74,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              textAlign: "center",
              marginBottom: 13,
            }}
          >
            {" "}
            Bienvenido
          </Text>
          <Text style={{ color: "#fff", fontSize: 18, textAlign: "center" }}>
            {" "}
            Marquestó Mario
          </Text>
        </View>
      </DrawerContentScrollView>

      <DrawerItemList {...props} />
    </View>
  );
};

export default CustomDrawer;

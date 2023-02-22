import { View, Text, Image, } from 'react-native'
import React from 'react'

const Perfil = () => {
  return (
    <View>
      <Text>Perfil</Text>
      <Image source={require("../../../assets/profile.png")}/>
    </View>
  )
}

export default Perfil
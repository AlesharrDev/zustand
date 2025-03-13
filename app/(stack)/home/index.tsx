import { View, Text } from 'react-native'
import React from 'react'
import globalStyle from '@/app/style/globalStyle'
import { useLocalSearchParams } from 'expo-router'

const Home = () => {
    const {name,email}= useLocalSearchParams();
  return (
    <View style={globalStyle.container} >
      <Text>this is de home</Text>
      <Text>Nombre: {name}</Text>
      <Text>Email: {email}</Text>

    </View>
  )
}

export default Home
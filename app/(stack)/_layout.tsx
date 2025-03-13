import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Stacklayout = () => {
  return (
    <Stack screenOptions={{
        
    }}>
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="home/index" options={{ title: "Perfil" }} />
      <Stack.Screen name="addtask/index" options={{ title: "tareas" }} />
    </Stack>
  )
}

export default Stacklayout
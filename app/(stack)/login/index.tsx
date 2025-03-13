import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import globalStyle from '@/app/style/globalStyle'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { create } from 'zustand'
import { router } from 'expo-router'
type LoginStore = {
    name: string
    email: string
    setName: (name: string) => void
    setEmail: (email: string) => void
}

const useLoginStore = create<LoginStore>()((set) => ({
    name: '',
    email: '',
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email })
}))

const Login = () => {
    const { name, email, setName, setEmail } = useLoginStore()

    const handleLogin = () => {
        router.push({
            pathname: '/home',
            params: { name, email }
        })
    }
    
    return (
        <SafeAreaProvider>
            <SafeAreaView style={globalStyle.container}>
                <Text style={globalStyle.h2}>Iniciar Sesion</Text>
                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
                    <Text style={globalStyle.label}>Nombre: </Text>
                    <TextInput
                        placeholder="Nombre"
                        style={globalStyle.input}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
                    <Text style={globalStyle.label}>Email: </Text>
                    <TextInput
                        placeholder="Email"
                        style={globalStyle.input}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <TouchableOpacity 
                    style={globalStyle.button}
                    onPress={handleLogin}
                >
                    <Text style={globalStyle.buttonText}>Iniciar Sesion</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Login
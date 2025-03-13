import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import globalStyle from '@/app/style/globalStyle'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={globalStyle.container}>
                <Text style={globalStyle.h2}>Iniciar Sesion</Text>
                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
                    <Text style={globalStyle.label}>Nombre: </Text>
                    <TextInput
                        placeholder="Nombre"
                        style={globalStyle.input}
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
                    <Text style={globalStyle.label}>Email: </Text>
                    <TextInput
                        placeholder="Email"
                        style={globalStyle.input}
                        keyboardType='email-address'
                    />
                </View>
                <TouchableOpacity style={globalStyle.button}>
                    <Text style={globalStyle.buttonText}>Iniciar Sesion</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Login
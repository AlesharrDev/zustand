import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import useTaskStore from '@/store/taskStore'
import { router } from 'expo-router'

const Addtask = () => {
    const [task, setTask] = useState('')
    const { addTask } = useTaskStore()

    const handleAddTask = () => {
        if (task.trim() !== '') {
            // Crear objeto Task con el formato correcto
            const newTask = {
                id: Date.now().toString(),
                title: task.trim()
            }
            addTask(newTask)
            setTask('')
            router.push('/')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Escribe una tarea'
                value={task}
                onChangeText={setTask}
                style={styles.input}
            />
            <View >
                <Button title='Agregar' onPress={handleAddTask} />
                <Button title='Volver' onPress={() => router.push('/')} />
            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}

export default Addtask
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {

    const navigation = useNavigation()
    
    const handleBeginning = () => {
        navigation.navigate("Onboarding")
    }
    
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <TouchableOpacity style={styles.buttonView} onPress={handleBeginning}> 
            <Text style={{ fontSize: 18 }}>Return to Beginning</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 34,
        textAlign: "center",
    },
    buttonView: {
        backgroundColor: "#d0e7ff",
        padding: 10,
        marginVertical: 20,
        borderRadius: 10

    }
})

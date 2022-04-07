import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Input = ({label, inputConfig}) => {
  return <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} {...inputConfig} />
        </View>
}

const styles= StyleSheet.create({
    container:{},
    label:{},
    input:{},
})
export default Input
import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

const Input = ({label, descStyle,invalid, inputConfig}) => {
  return <View style={styles.container}>
            <Text style={[styles.label, styles.invalidLabel]}>{label}</Text>
            <TextInput style={[styles.input, {...descStyle}, invalid && styles.invalidInput ]} {...inputConfig} />
        </View>
}

const styles= StyleSheet.create({
    container:{
        paddingVertical:6,
    },
    label:{
        fontSize:18,
        color:GlobalStyles.colors.primary50,
    },
    input:{
        backgroundColor:GlobalStyles.colors.primary100,
        paddingHorizontal:8, paddingVertical:15,
        marginVertical:10,
        borderRadius:4,
        color:GlobalStyles.colors.gray700,
        letterSpacing:2,
        fontSize:18,
    },
    invalidLabel:{
        color:GlobalStyles.colors.error500
    },
    invalidInput:{
        backgroundColor:'pink',
    }
})
export default Input
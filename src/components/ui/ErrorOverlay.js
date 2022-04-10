import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

const ErrorOverlay = ({message}) => {
  return <View style={styles.container}>
            <Text style={[styles.title,styles.text]}>An Error Occured !</Text>
            <Text style={[styles.text,styles.msg]}>{message}</Text>
        </View>
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center', alignItems:'center',
        backgroundColor:GlobalStyles.colors.gray700,
    },
    text:{
        textAlign:'center', 
        marginVertical:10,
        color:'#fff',
    },
    title:{ 
        fontSize:22,
        fontWeight:'bold',
    },
    msg:{
        fontSize:16,
    }
})
export default ErrorOverlay;

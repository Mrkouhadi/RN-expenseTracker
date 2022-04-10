import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

const LoadingOverlay = () => {
  return <View style={styles.container}>
            <ActivityIndicator size="large" color="#fff"/>
        </View>
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center', alignItems:'center',
        backgroundColor:GlobalStyles.colors.gray700,
    }
})
export default LoadingOverlay;

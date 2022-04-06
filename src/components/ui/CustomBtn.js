import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

const CustomBtn = ({onPress, mode, children , style}) => {
  return <View style={style}>
            <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
                <View style={[styles.container, mode==='flat' && styles.flat]}>
                  <Text style={[styles.btnText,mode==='flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
         </View>
}
const styles = StyleSheet.create({
    container:{
        borderRadius:4,
        padding:8,
        backgroundColor:GlobalStyles.colors.primary200,
    },
    flat:{
        backgroundColor:'transparent',
    },
    btnText:{
        color:'#fff',
        textAlign:'center',
    },
    flatText:{
        color:GlobalStyles.colors.primary50,
    },
    pressed:{
        opacity:.75,
        backgroundColor:GlobalStyles.colors.primary200,
        borderRadius:4,
    }
});
export default CustomBtn;
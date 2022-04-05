import React from 'react'
import {StyleSheet, View, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const CustomBackBtn = (props)=>{
    return <Pressable style={styles.container} onPress={props.onPress}>
                <View style={styles.box}>
                    <Icon name="md-return-up-back-outline" size={35} color="red" />
                </View>
          </Pressable>
  }

  const styles = StyleSheet.create({
      container:{
         alignItems:'center', justifyContent:'center',
      },
      box:{
        width:40, height:40,
        alignItems:'center', justifyContent:'center'
      }
  });

  export default CustomBackBtn;
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const IconBtn = ({iconName, size, color, onPress}) => {
  return <Pressable style={({pressed}) => pressed && styles.pressed}
                    onPress={onPress}>
            <View style={styles.container}>
                <Icon name={iconName} color={color} size={size} />
            </View>
        </Pressable>
}

const styles = StyleSheet.create({
    container:{
        borderRadius:24,
        padding:6,
        marginHorizontal:10,
    },
    pressed:{
        opacity:.5,
    }
})
export default IconBtn
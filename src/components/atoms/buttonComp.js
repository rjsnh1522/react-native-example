import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ButtonComp = ({title, style, textStyle, onPress}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} activeOpacity={0.8} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: "#00A884",
        width: "100%",
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(10),
        borderRadius: moderateScale(4),
        textAlign: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        letterSpacing: 3,
        fontSize: moderateScale(14)
    }
})
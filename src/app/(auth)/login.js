import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import ButtonComp from '../../components/atoms/buttonComp'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Enter your phone number</Text>
        <Text style={styles.linkDescription}>
          WhatsApp will need to verify your phone number. <Text style={styles.link_text}>what's my number?</Text>
        </Text>
        <View style={styles.inputBoxWrapper}></View>
      </View>
      <View style={styles.footer} >
        <ButtonComp title={"Next"} 
        style={styles.buttonStyle} textStyle={styles.buttonTextStyle} />

      </View>
      </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(30),
    paddingVertical: verticalScale(30),
  },
  header:{
    backgroundColor: 'yellow',
    flex: 8,
    paddingVertical: verticalScale(40),
    textAlign: 'center'
  },
  pageTitle:{
    fontSize: moderateScale(22),
    fontWeight: 600,
    color: 'black',
    textAlign: 'center'
  },
  link_text:{
    color: '#0c42CC'
  },
  linkDescription:{
    textAlign: 'center',
    paddingVertical: verticalScale(20),
    fontSize: moderateScale(13),
    textAlign: 'center',
    color: "#000000"
  },
  inputBoxWrapper:{

  },
  footer:{
    backgroundColor: "green",
    flex: 2,
    alignItems:'center',
    justifyContent: 'space-around'
  },
  buttonStyle:{
    width: scale(150)
  },
  buttonTextStyle:{
    textTransform: 'uppercase'
  }
})

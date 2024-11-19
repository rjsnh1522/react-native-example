import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import ButtonComp from '../../components/atoms/buttonComp'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import CountryPicker from 'react-native-country-picker-modal'

const Login = () => {

  const [visible, setVisible] = useState(false)
  const [getCountryName, setCountryName] =useState("India")
  const [getCountryCode, setCountryCode] = useState("+  91")

  const onNextButtonClick = () => {
    router.push("/(auth)/verify_otp")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Enter your phone number</Text>
        <Text style={styles.linkDescription}>
          WhatsApp will need to verify your phone number. <Text style={styles.link_text}>what's my number?</Text>
        </Text>
        <View style={styles.inputBoxWrapper}>
          
          <TouchableOpacity style={styles.dropDownContainer} onPress={() => {setVisible(true)}}>
            <View />
            <Text style={styles.dropDownTitle}>{getCountryName}</Text>
            <AntDesign name="caretdown" size={moderateScale(14)} color="black" />
          </TouchableOpacity>

          <View style={styles.horizontalLine} />
          <View style={styles.mobileNumberWrapper}>
            <View style={styles.country_code_wrapper}>
              <TextInput style={styles.country_code}>{getCountryCode}</TextInput>
              <View style={styles.horizontalLine} />
            </View>
            <View style={styles.mobile_number_input}>
              <TextInput 
              keyboardType='numeric'
              style={styles.phone_number_input} 
              placeholder='Enter Your Phone Number' />
              <View style={styles.horizontalLine} />
            </View>
          </View>
        </View>
      </View>
      {
        visible && (
          <CountryPicker 
          visible={visible} 
          onClose={() => setVisible(false)}
          onSelect={(e) => {
              setCountryCode(`+ ${e.callingCode[0]}`)
              setCountryName(e.name)
          }}/>
        )
      }
      <View style={styles.footer} >
        <ButtonComp title={"Next"} 
        style={styles.buttonStyle} 
        textStyle={styles.buttonTextStyle} onPress={onNextButtonClick}/>

      </View>
      </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    // backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(30),
    paddingVertical: verticalScale(30),
  },
  country_code_wrapper:{
    flex: '10%',
    // backgroundColor: 'red'
  },  
  mobile_number_input:{
    flex: "90%",
    // backgroundColor: 'green'
  }, 
  phone_number_input:{
    fontSize: moderateScale(16),
    fontWeight: 400,
    minWidth: scale(200)
  } ,
  country_code:{
    fontSize: moderateScale(16),
    fontWeight: 600
  },
  mobileNumberWrapper:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: scale(20),
    paddingVertical: verticalScale(10)
  },
  dropDownContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(10)
  },
  dropDownTitle:{
    fontSize: moderateScale(14),
    fontWeight: 600
  },
  horizontalLine:{
    width: '100%',
    height: verticalScale(2),
    backgroundColor: "#00A884"

  },
  header:{
    // backgroundColor: 'yellow',
    flex: 8,
    paddingVertical: verticalScale(30),
    textAlign: 'center',
    gap: verticalScale(35)
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
    fontSize: moderateScale(13),
    textAlign: 'center',
    color: "#000000",
  },
  inputBoxWrapper:{

  },
  footer:{
    // backgroundColor: "green",
    flex: 2,
    alignItems:'center',
    justifyContent: 'space-around',
    justifyContent: 'flex-end'
  },
  buttonStyle:{
    width: scale(120)
  },
  buttonTextStyle:{
    textTransform: 'uppercase'
  }
})

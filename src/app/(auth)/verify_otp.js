import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import ButtonComp from '../../components/atoms/buttonComp';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const VerifyOtp = () => {

  const verifyOtp = () => {

  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headTitle}>Enter OTP Code</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.otpSendText}>Code has been sent to +91 11******44</Text>
        <Text style={styles.otpResendText}>Resend Code in <Text style={styles.timeSeconds}> 56 s </Text></Text>
      </View>
      <View style={styles.footer}>
        <ButtonComp 
          title={"Verify"} 
          onPress={verifyOtp}
          style={styles.verifyButton}/>
      </View>
    </SafeAreaView>
  )
}

export default VerifyOtp

const styles = StyleSheet.create({
  container:{
    padding: moderateScale(20),
    flex: 1,
    justifyContent: "space-between",
    paddingTop: verticalScale(30),
  },
  head:{
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  backButton:{
    fontSize: moderateScale(24),
    color: "black",
    fontWeight: "bold"
  },
  headTitle:{
    fontSize: moderateScale(20),
    color: "black",
    fontWeight: "bold"
  },
  body:{
    alignItems: "center",
  },
  otpSendText:{
    fontSize: moderateScale(16),
    fontWeight: "400"
  },
  otpResendText:{},
  footer:{

  },
  verifyButton:{
    borderRadius: moderateScale(30),
  },
  timeSeconds:{
    color: 'blue'
  }

})
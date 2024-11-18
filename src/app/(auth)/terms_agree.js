import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import AllImages from '../../constant/ImagePath'
import ButtonComp from '../../components/atoms/buttonComp'
import { router } from 'expo-router'

const TermsAgree = () => {
  const onAgree = () => {
    router.navigate("login")
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Image style={styles.image} source={AllImages.welcome}/>
        <View style={styles.terms_button_container}>
          <Text style={styles.term_and_condition}>
            Read our <Text style={styles.link_text}>Privacy Policy </Text> Tap "Agree and continue" 
            to accept the <Text style={styles.link_text}>Terms of service</Text>
          </Text>
          <View style={styles.buttonContainer}>
            <ButtonComp style={styles.button_wrapper} 
            title={"AGREE AND CONTINUE"} onPress={onAgree}/>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
      <Text style={styles.fromText}>From</Text>
      <Text style={styles.faceBookText}>Facebook</Text>
      </View>
    </SafeAreaView>
  )
}

export default TermsAgree

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(84),
    paddingHorizontal: scale(30),
    // backgroundColor: 'red'
  },
  header:{
    flex: 1,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: verticalScale(35),
  },
  footer:{
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
    width: '100%',
    // paddingVertical: scale(40)
  },
  image:{
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250),
    paddingVertical: verticalScale(30)
  },
  buttonContainer:{
    width: moderateScale(300),
    paddingTop: scale(20)
  },
  terms_button_container:{
    alignItems: 'center',
    gap: moderateScale(20),
  },
  term_and_condition:{
    fontSize: moderateScale(13),
    paddingHorizontal: scale(20),
    textAlign: 'center',
    color: "#000000"
  },
  link_text:{
    color: '#0c42CC'
  },
  fromText:{
    fontSize: moderateScale(12),
    color: "#867373"
  },
  faceBookText:{
    fontSize: moderateScale(15),
    color: "#000000",
    textTransform: 'uppercase',
    fontWeight: 600
  },
  welcome_text:{
    fontSize: moderateScale(30),
    fontWeight: 600,
    color: 'black'
  }

})
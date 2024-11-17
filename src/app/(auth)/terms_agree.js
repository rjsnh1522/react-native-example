import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const TermsAgree = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Image style={styles.image}/>
        <Text style={styles.term_and_condition}></Text>
        <View style={styles.button_wrapper}></View>
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
    paddingVertical: verticalScale(84)
  },
  header:{
    flex: 1,
  },
  footer:{
    flex: 1,
    alignItems: 'center'
  },
  image:{

  },
  term_and_condition:{

  },
  button_wrapper:{

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
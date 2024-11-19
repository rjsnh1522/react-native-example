import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import AllImages from "@/src/constant/ImagePath";
import { moderateScale, verticalScale } from 'react-native-size-matters';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  let navigate_to_welcome = () => {
    router.navigate("/(auth)/terms_agree")
  }

  let loadingTimeOut = () => {
    setIsLoading(true)
    setTimeout(navigate_to_welcome, 3000)
  }

  useEffect(()=>{
    const timeoutId =  setTimeout(loadingTimeOut, 2000)
    return () => {clearTimeout(timeoutId)}
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image source={AllImages.logo} style={styles.logo}/>
        <Text style={styles.whatsappText}> Whatsapp</Text>
      </View>
      <View style={styles.footer}>
        
        {isLoading ? (<>
          <ActivityIndicator size={48} color={"#0ccc83"} />
          <Text style={styles.loading_text}>Loading...</Text>

        </>)  : 
        
        <>
        <Text style={styles.fromText}>From</Text>
        <Text style={styles.faceBookText}>Facebook</Text>
        </>
}
        
      </View>
    </SafeAreaView>
  )
}

export default Auth

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(70),

  },
  header:{
  },
  body:{
    alignItems: 'center',
    gap: verticalScale(19)
  },
  footer:{
    alignItems: 'center',
    height: verticalScale(60),
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
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
  logo:{
    height: moderateScale(80),
    width: moderateScale(80)
  },
  whatsappText:{
    color: "#000000",
    fontSize: moderateScale(32),
    fontWeight: 600,
    textTransform: "capitalize"
  },
  loading_text:{
    fontSize: moderateScale(20),
    fontWeight: 400,
    textTransform:'capitalize',
    color: '#00A884',
    marginTop: verticalScale(15)
  }


})





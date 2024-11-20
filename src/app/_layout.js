import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {

  useEffect(()=>{
    setTimeout(() => {
      SplashScreen.hideAsync();
      console.log("hidden")
    }, 4000);
  }, [])

  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
    <Stack screenOptions={{headerShown: false}}/>
      { isLogin ? <Redirect href={"/(tabs)"} /> : <Redirect href={"/(auth)"} />}

    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="terms_agree"/>
        <Stack.Screen name="login"/>
        <Stack.Screen name="verify_otp"/>
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})
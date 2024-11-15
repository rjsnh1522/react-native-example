import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MyButton from '../components/MyButton';
import { useRouter } from 'expo-router';

const Index = () => {
    const router = useRouter();
    const conContinue = () => {
        console.log("hereer")
        router.navigate('/login')
    }


  return (
     <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Index Page</Text>
      <MyButton title={"Go to Login.."} onPress={conContinue} />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})
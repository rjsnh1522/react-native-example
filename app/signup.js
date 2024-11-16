import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import MyButton from '../components/MyButton'
import styles from '../assets/css/common_css'

const SignupScreen = () => {
    const router = useRouter()
    function goToLogin(){
        router.navigate('/login')
    }
    function signUp(){
        console.log("Signup")
    }

  return (
    <ScrollView 
    showsVerticalScrollIndicator={false} 
    contentContainerStyle={localstyles.wrapper}>
      <Text> Signup Page</Text>
        <View style={styles.form_wrapper}>
            <TextInput placeholder='Enter your email' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Confirm Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Enter your email' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Confirm Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Enter your email' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Confirm Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Enter your email' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Confirm Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Enter your email' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Confirm Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Enter your email' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Confirm Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Enter your email' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Confirm Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Enter your email' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
            <TextInput placeholder='Confirm Password' style={styles.text_input} onChangeText={(e) => {console.log(e)}}/>
        </View>
      <MyButton title={"Sign Up."} onPress={signUp} />
      <MyButton title={"Or Login"} onPress={goToLogin} />
    </ScrollView>
  )
}

export default SignupScreen


const localstyles = StyleSheet.create({
    wrapper:{
        // flex: 1,
        justifyContent: "center",
        alignItems: "center" 
    }
    
})
import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../components/MyButton'
import { useRouter } from 'expo-router'
import styles from '../assets/css/common_css'

const LoginScreen = () => {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })


    const router = useRouter()
    function goToSignup(){
        router.navigate('/signup')
    }
    function loginIn(){
        console.log("Log in")
        console.log(loginForm)
    }

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text> Login Page</Text>
    <View style={styles.form_wrapper}>
    
            <TextInput placeholder='Enter your email' style={styles.text_input} 
            onChangeText={(e) => {setLoginForm(prev => ({...prev, email: e}))}}/>

            <TextInput placeholder='Password' style={styles.text_input} 
            onChangeText={(e) => { setLoginForm(prev => ({...prev, password: e})) }}/>
    </View>
    <MyButton title={"Login"} onPress={loginIn} />
    <MyButton title={"or signup..."} onPress={goToSignup} />
  </View>
  )
}

export default LoginScreen
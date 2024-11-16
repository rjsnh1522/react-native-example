import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyButton from '../components/MyButton'
import { useRouter } from 'expo-router'
import styles from '../assets/css/common_css'

const LoginScreen = () => {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    useEffect(()=>{
        console.log("Called...")
    }, [loginForm?.email, loginForm.password]);


    const router = useRouter()
    function goToSignup(){
        router.navigate('/signup')
    }
    function loginIn(){
        console.log("Log in")
        console.log(loginForm)
    }

  return (
    <View style={localstyles.wrapper}>
    <Text> Login Page</Text>

    <FlatList 
            data={[1,2,3,4,5,6,7,8, 1,2,3,4,5,6,7,8, 1,2,3,4,5,6,7,8, 1,2,3,4,5,6,7,8]}
            numColumns={3}
            ListHeaderComponent={<View style={{backgroundColor: 'red', height: 100, width: '100%'}}></View>}
            ListFooterComponent={<View style={{backgroundColor: 'red', height: 100, width: '100%'}}></View>}
            renderItem={({item}) => {

                return (
                        <View style={localstyles.item_wrapper}>
                            <Text> {item}</Text>
                        </View>

                )
            }}
    />    

    <MyButton title={"Login"} onPress={loginIn} />
    <MyButton title={"or signup..."} onPress={goToSignup} />
  </View>
  )
}

export default LoginScreen

const localstyles = StyleSheet.create({
    wrapper:{
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    item_wrapper:{
        width: 50,
        height: 50,
        backgroundColor: 'green',
        margin: 20,
        padding: 50,
        // flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    }
})
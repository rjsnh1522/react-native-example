import { View, Text } from 'react-native'
import React from 'react'


const IndexPage = () => {

  return (
    <View>
      <Text style={{fontFamily: "Poppins_100Thin", fontSize: 43}}>Some lorem data to check font...</Text>
      <Text style={{fontFamily: "Poppins_200ExtraLight", fontSize: 43}}>Some lorem data to check font...</Text>
      <Text style={{fontFamily: "Poppins_300Light", fontSize: 43}}>Some lorem data to check font...</Text>
      <Text style={{fontFamily: "Poppins_400Regular", fontSize: 43}}>Some lorem data to check font...</Text>
      <Text style={{fontFamily: "Poppins_500Medium", fontSize: 43}}>IndexPage...</Text>
      <Text style={{fontFamily: "Poppins_600SemiBold", fontSize: 43}}>IndexPage...</Text>
      <Text style={{fontFamily: "Poppins_700Bold", fontSize: 43}}>IndexPage...</Text>
      <Text style={{fontFamily: "Poppins_800ExtraBold", fontSize: 43}}>IndexPage...</Text>
      <Text style={{fontFamily: "Poppins_900Black", fontSize: 43}}>IndexPage...</Text>
    </View>
  )
}

export default IndexPage
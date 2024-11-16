import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AllImages from "@/src/constant/ImagePath.js"

const IndexPage = () => {
  return (
    <View>
      <Text>IndexPage........</Text>
      <Image source={ AllImages.react_logo}/>
      <Image source={ AllImages.partial_logo}/>
    </View>
  )
}

export default IndexPage

const styles = StyleSheet.create({})
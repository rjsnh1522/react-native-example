import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'

const IndexPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
            <Text style={styles.headerTitle}>Leader Board</Text>
            <View style={styles.mainCardContainer}>
                {
                    [3,1,2].map((item, index) => {

                        return (
                            <View key={index} 
                            style={[styles.mainCard, item !==1 && {marginTop: 20} ]}>
                                <Image 
                                source={{uri: "https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg?t=st=1731753645~exp=1731757245~hmac=16a1199e97f31ac37b22b3109d24c432b665eee2e37243b75bc62b8739b28ee2&w=1380"}}
                                style={styles.mainCardImage}
                                resizeMode='cover' />
                                <Text style={styles.mainCardTitle}> Vishu </Text>
                                <View style={styles.mainCardRankContainer}> 
                                <Text style={styles.mainCardRankContainerText}> {item} </Text>
                                </View>
                            </View>
                    )
                    })
                }
            </View>
      </View>
      <FlatList data={[1,2,23,,4,55,4,3,2,2, 5, 10,13, 45, 67, 89, 12, 23, 67]} 
        renderItem={ ({item, index}) => {
            return (
                <View style={styles.card}>
                    <View style={styles.cardDataContainer}>
                        <Text style={styles.cardIndex} >  {index + 1} </Text>
                        <Image 
                            source={{uri: "https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg?t=st=1731753645~exp=1731757245~hmac=16a1199e97f31ac37b22b3109d24c432b665eee2e37243b75bc62b8739b28ee2&w=1380"}} 
                            style={styles.cardImage} 
                            resizeMode="cover"
                        />
                        <Text style={styles.cardTitle}> P1 chaurasia</Text>
                    </View>
                    <View style={styles.cardRankContainer}>
                    <Text style={styles.cardRankTitle}> 4563433</Text>
                    </View>
                </View>
            )
        } }
      />

    </View>
  )
}

export default IndexPage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#272c35',
    },
    topContainer:{
        backgroundColor: "#1a1f25",
        paddingTop: 30,
        padding: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        gap: 20,
        paddingBottom: 50
    },
    headerTitle:{
        textAlign: "center",
        color: "white",
        fontSize: 21
    },
    mainCardContainer:{
        flexDirection: "row",
        gap: 10,
        justifyContent: "center"
    },
    mainCard:{
        backgroundColor: "#272c35",
        padding: 20,
        alignItems: "center",
        borderRadius: 10,
        gap: 15,
        height: 130

    },
    
    mainCardImage:{
        width: 50,
        height: 60,
        borderRadius: 10
    },
    mainCardTitle:{
        color: "white",
        fontSize: 17,
        fontWeight: 600

    },
    mainCardRankContainer:{
        backgroundColor: "orange",
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        position: "absolute",
        bottom: -10
    },
    mainCardRankContainerText:{
        color: "white"
    },
    card:{
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardIndex:{
        color: "white",
        fontSize:17

    },
    cardImage:{
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10
    },
    cardTitle:{
        color: "white"

    },
    cardDataContainer:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    cardRankContainer:{},
    cardRankTitle:{
        color: "orange",

    }
})
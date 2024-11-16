import { View, Text, StyleSheet, Button, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import ReactNativeModal from 'react-native-modal';

const IndexPage = () => {

    const [modalVisible, setModalVisible] = useState(false);


  return (
    <View style={styles.container}>
        <Button title="Open Modal" onPress={()=> setModalVisible(true)}/>
        {/* <Modal visible={modalVisible} animationType='slide' transparent>
            <View style={styles.modal_wrapper}>
                <View style={{backgroundColor: "blue", alignItems: 'center', justifyContent: 'center'}}>
                    <Button title="close Modal" onPress={()=> setModalVisible(false)}/>
                </View>
            </View>
        </Modal> */}
        <ReactNativeModal isVisible={modalVisible} 
            onBackdropPress={() => setModalVisible(false)} 
            onBackButtonPress={() => setModalVisible(false)}
            animationIn={"shake"}
            animationOut={"flash"} 
            style={{justifyContent: "flex-start", margin: 0}}
            >
            <View style={styles.modal_wrapper}>
            </View>
        </ReactNativeModal>
    </View>
  )
}

export default IndexPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modal_wrapper: {
        width: "100%",
        height: 200,
        backgroundColor: "red",
        // top: 0,
        // flex: 1,
        // position: "absolute"
    }
})
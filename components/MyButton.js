import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const MyButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle} 
        onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor: "lightblue",
        paddingHorizontal: 60, 
        paddingVertical: 20,
        borderRadius: 10,
        margin: 3,
        width: 300
    },
    buttonText:{fontSize: 16, fontWeight: 500, textAlign: 'center' }
})
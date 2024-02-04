import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles"; 

export default function CustomButton({ title, onPress }) {
  const buttonStyle = {
    ...styles.regularButton,
  };
  
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} >
      <Text style={styles.buttonText} >{title}</Text>
    </TouchableOpacity>
  )
}
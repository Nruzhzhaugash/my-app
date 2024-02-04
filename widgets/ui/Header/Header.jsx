import { Text, View } from "react-native";
import { styles } from './styles';

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  )
}
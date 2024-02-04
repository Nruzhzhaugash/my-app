import { Text, TouchableOpacity } from "react-native"
import { styles } from './styles'

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(el.key)} style={styles.next_container}>
      <Text style={styles.next}>{el}</Text>
    </TouchableOpacity>
  )
}
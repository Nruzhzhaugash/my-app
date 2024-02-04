import { View } from 'react-native'
import { useState } from 'react';
import { styles } from './styles'
import Input from '../../../shared/ui/TextInput/TextInput'
import CustomButton from '../../../shared/ui/Button'

export default function Form({ addHandler }) {
  const [text, setText] = useState('');

  return (
    <View>
      <Input onChangeText={(text) => setText(text)} />
      <CustomButton  onPress={() => addHandler(text)} title='Добавить задачу' />
    </View>
  )
}
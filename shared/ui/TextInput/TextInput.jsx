import { TextInput } from "react-native" 
import { useState } from "react";
import { styles } from "./styles" 

export default function Input({ onChangeText }) {

  return (
    <TextInput style={styles.input} onChangeText={onChangeText} placeholder="Впишите задачу" />
  )
};
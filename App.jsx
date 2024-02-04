import { View, FlatList } from "react-native";
import { useState } from "react";
import Header from "./widgets/ui/Header/Header";
import ListItem from "./features/ui/ListItem/ListItem";
import Form from "./features/ui/Form/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить молоко', key: '1'},
    {text: 'Купить Кроссы', key: '2'},
    {text: 'Сходить в кино', key: '3'},
    {text: 'Идти нахуй', key: '4'},
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => [
      { text: text, key: Math.random().toString(36).substring(7) },
      ...list
    ]);
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => list.filter(item => item.key !== key));
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList 
          data={listOfItems} 
          renderItem={({ item }) => (
            <ListItem el={item.text} deleteHandler={() => deleteHandler(item.key)} />
          )} 
        />
      </View>
    </View>
  )
}
import React, {useState, useEffect} from "react";
import { Text, View } from 'react-native';
import { styles } from "./Catalogo.styles";
import {list} from "../../services/todos";

export default function CatalogoScreen({ onPress }) {
    const [todos, setTodos] = useState();
    async function listTodos(){
        const todosFetched = await list();
        if(todosFetched) setTodos(todosFetched);
    }

    useEffect(() => {
        listTodos();
    },[])
    return (
        <View style={styles.container}>
            <Text>Catalogo</Text>
            {todos && todos.map((todo)=> <text>{`${todo.title} ${todo.author} ${todo.isbn}`}</text>)}
        </View>
    );
}
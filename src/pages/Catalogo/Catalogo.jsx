import React, {useState, useEffect, useContext} from "react";
import { Text, View } from 'react-native';
import { styles } from "./Catalogo.styles";
import {list} from "../../services/todos";

import { GlobalContext } from "../../context/global/global.context";

export default function CatalogoScreen({ onPress }) {
    const {listTodos, todos} = useContext(GlobalContext);

    useEffect(() => {
        listTodos();
    },[])
    
    return (
        <View style={styles.container}>
            {todos && todos.map((todo)=> 
            <><Text>Titulo: {`${todo.title}`}</Text><Text>Autor: {`${todo.author} `}</Text><Text style={{marginBottom: 30}}>ISBN: {`${todo.ISBN}`}</Text></>            
            )}
            
        </View>
    );
}
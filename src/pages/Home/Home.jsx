import React,{ useState, useEffect, useContext } from "react";
import { Text, View, TextInput } from 'react-native';
import { styles } from "./Home.styles";
import { listTodos } from "../Catalogo";

import ButtonComponent from "../../components/Button";

import {create, onCreate} from "../../services/todos";

import { GlobalContext } from "../../context/global/global.context";

export default function HomeScreen() {
    const [todo, setTodo] = useState({title:"", author:"", ISBN:""});
    const {listTodos} = useContext(GlobalContext);

    async function createTodo(title, author, ISBN){
        const todoCreated = await create({title, author, ISBN})
        return todoCreated;
    }

    const addData = () => {
        createTodo(todo.title, todo.author, todo.ISBN)
    }

    useEffect(() => {
        let subscription;
        (async function suscribe(){
            subscription = await onCreate(listTodos)
        })();
        return () => {
            subscription?.unsubscribe()
        }
    },[])
    return (
        <View style={styles.container}>
            <Text style={{margin:20}}>Registro de Libros</Text>
            <Text>Title</Text>
            <TextInput
            onChangeText={(text) => 
                setTodo((current)=> ({...current, title: text }))
            }
            style={styles.input}
            />
            <Text>Author</Text>
            <TextInput
            onChangeText={(text) => 
                setTodo((current)=> ({...current, author: text }))
            }
            style={styles.input}
            />
            <Text>ISBN</Text>
            <TextInput
            onChangeText={(text) => 
                setTodo((current)=> ({...current, ISBN: text }))
            }
            style={styles.input}
            />
            <ButtonComponent title="Guardar Libro" onPress={addData}/>
        </View>
    );
}
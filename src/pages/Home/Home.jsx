import React,{ useState, useEffect } from "react";
import { Text, View, TextInput } from 'react-native';
import { styles } from "./Home.styles";

import ButtonComponent from "../../components/Button";

import {create, onCreate} from "../../services/todos";

export default function HomeScreen({ onPress }) {
    const [todo, setTodo] = useState({title:"", author:"", ISBN:""});

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
            subscription = await onCreate()
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
import React,{ useState, useEffect, useContext } from "react";
import { Text, View, TextInput } from 'react-native';
import { styles } from "./Home.styles";
import { listBooks } from "../Catalogo";

import ButtonComponent from "../../components/Button";

import {create, onCreate} from "../../services/Books";

import { GlobalContext } from "../../context/global/global.context";

export default function HomeScreen() {
    const [book, setBook] = useState({Name:"", Description:"", Estatus:"", ISBN:"", Categoria:"", FechaPublicacion:""});
    const {listBooks} = useContext(GlobalContext);

    async function createBook(Name, Description, Estatus, ISBN, Categoria, FechaPublicacion){
        const bookCreated = await create({Name, Description, Estatus, ISBN, Categoria, FechaPublicacion})
        return bookCreated;
    }

    const addData = () => {
        createBook(book.Name, book.Description, book.Estatus, book.ISBN, book.Categoria, book.FechaPublicacion)
    }

    useEffect(() => {
        let subscription;
        (async function suscribe(){
            subscription = await onCreate(listBooks)
        })();
        return () => {
            subscription?.unsubscribe()
        }
    },[])
    return (
        <View style={styles.container}>
            <Text>Name</Text>
            <TextInput
            onChangeText={(text) => 
                setBook((current)=> ({...current, Name: text }))
            }
            style={styles.input}
            />
            <Text>Description</Text>
            <TextInput
            onChangeText={(text) => 
                setBook((current)=> ({...current, Description: text }))
            }
            style={styles.input}
            />
            <Text>Estatus</Text>
            <TextInput
            onChangeText={(text) => 
                setBook((current)=> ({...current, Estatus: text }))
            }
            style={styles.input}
            />
            <Text>ISBN</Text>
            <TextInput
            onChangeText={(text) => 
                setBook((current)=> ({...current, ISBN: text }))
            }
            style={styles.input}
            />
            <Text>Categoria</Text>
            <TextInput
            onChangeText={(text) => 
                setBook((current)=> ({...current, Categoria: text }))
            }
            style={styles.input}
            />
            
            <Text>Fecha de Publicacion</Text>
            <TextInput
            onChangeText={(text) => 
                setBook((current)=> ({...current, FechaPublicacion: text }))
            }
            style={styles.input}
            />
            <ButtonComponent title="Guardar Libro" onPress={addData}/>
        </View>
    );
}
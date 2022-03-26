import React from "react"; 
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import ButtonComponent from "../../components/Button";

import { styles } from "./Login.styles";

export default function LoginScreen({ onPress }){
    return (
        <View style={styles.container}>
            <StatusBar />
            <Text>Login</Text>
            <ButtonComponent title="LogIn" onPress={onPress}/>
        </View>
    );
}
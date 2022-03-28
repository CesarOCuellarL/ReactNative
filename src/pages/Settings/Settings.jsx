import React from "react";
import { Text, View } from 'react-native';
import { styles } from "./Settings.styles";

import ButtonComponent from "../../components/Button";

export default function SettingsScreen(){
    return(
        <View style={styles.container}>
            <Text>Settings</Text>
            <ButtonComponent title="LogOut" onPress={onPress} color="#ff3f4f"/>
        </View>
    )
}
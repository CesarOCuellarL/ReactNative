import React from "react";
import { Text, View } from 'react-native';
import { styles } from "./Home.styles";

import ButtonComponent from "../../components/Button";

export default function HomeScreen({ onPress }) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <ButtonComponent title="LogOut" onPress={onPress} color="#ff3f4f"/>
        </View>
    );
}
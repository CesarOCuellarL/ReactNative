import React, { useContext } from "react";
import { Text, View, TextInput} from "react-native";
import { styles } from "./Settings.styles";
import { Storage } from "aws-amplify";
import ButtonComponent from "../../components/Button";

//import ImagePicker from 'react-native-image-picker';

import { GlobalContext } from "../../context/global/global.context";

export default function SettingsScreen({ onPress }) {
  const { usuario } = useContext(GlobalContext);

  async function onChange(e) {
    const file = e.target.files[0];
    console.log(file)

    try {
      await Storage.put(file.name, file, {
        contentType: "image/png", // contentType is optional
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }

  }

  async function downloadImage(){
    const signedURL = await Storage.get('images/636e16a102b0a00c24eacad5de900e9f.png');
  }

  return (
    <View style={styles.container}>
      <Text>Hola! {usuario}</Text>
      <ButtonComponent title="LogOut" onPress={onPress} color="#ff3f4f" />
    </View>
  )
}

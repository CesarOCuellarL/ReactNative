import React, { useContext } from "react";
import { Text, View } from "react-native";
import { styles } from "./Settings.styles";
import { Storage } from "aws-amplify";
import ButtonComponent from "../../components/Button";

import { GlobalContext } from "../../context/global/global.context";

export default function SettingsScreen({ onPress }) {
  const { usuario } = useContext(GlobalContext);

  async function onChange(e) {
    const file = e.target.files[0];
    console.log(file)
    /*
    try {
      await Storage.put(file.name, file, {
        contentType: "image/png", // contentType is optional
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
    */
  }

  function downloadImage(){
    const signedURL = await Storage.get(key);
    console.log(signedURL);
  }

  return (
    <View style={styles.container}>
      <Text>THIS IS A EXAMPLE</Text>
      <View>
          <ButtonComponent title="download" onPress={()=>{downloadImage}} />
      </View>
      <input type="file" onChange={onChange} />;<Text>Hola! {usuario}</Text>
      <ButtonComponent title="LogOut" onPress={onPress} color="#ff3f4f" />
    </View>
  );
}

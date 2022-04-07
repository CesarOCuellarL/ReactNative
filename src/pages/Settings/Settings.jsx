import React, { useContext, useState } from "react";
import { Text, TextInput, View } from "react-native";
import ButtonComponent from "../../components/Button";
import ImagePickerComponent from "../../components/ImagePicker";
import { GlobalContext } from "../../context/global/global.context";
import { styles } from "./Settings.styles";


export default function SettingsScreen({ onPress }) {
  const { usuario } = useContext(GlobalContext);
   const [image, setImage] = useState(null);

  // const imageOptions = {
  //   mediaType: "photo",
  //   quality: 1,
  //   cameraType: "front",
  //   includeBase64: true,
  // };

  async function onChange(e) {
    const file = e.target.files[0];
    console.log(file);

  //   try {
  //     await Storage.put(file.name, file, {
  //       contentType: "image/png", // contentType is optional
  //     });
  //   } catch (error) {
  //     console.log("Error uploading file: ", error);
  //   }
  }

  // async function downloadImage() {
  //   let signedURL = await Storage.get(
  //     "images/636e16a102b0a00c24eacad5de900e9f.png"
  //   );
  //   console.log(signedURL);
  //   setImage(signedURL);
  // }

  // async function openCamera() {
  //   const result = await launchCamera(imageOptions);
  //   console.log(result);
  // }


  return (
    <View style={styles.container}>
      <Text>THIS IS A EXAMPLE</Text>
      <View>
          <ImagePickerComponent />
      </View>
      <TextInput type="file" onChange={onChange} />
      <Text>Hola! {usuario}</Text>
      <ButtonComponent title="LogOut" onPress={onPress} color="#ff3f4f" />
    </View>
  );
}

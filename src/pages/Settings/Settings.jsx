import { Storage } from "aws-amplify";
import React, { useContext, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { launchCamera } from "react-native-image-picker";
import ButtonComponent from "../../components/Button";
import { GlobalContext } from "../../context/global/global.context";
import { styles } from "./Settings.styles";


export default function SettingsScreen({ onPress }) {
  const { usuario } = useContext(GlobalContext);
  // const [image, setImage] = useState();

  // const imageOptions = {
  //   mediaType: "photo",
  //   quality: 1,
  //   cameraType: "front",
  //   includeBase64: true,
  // };

  // async function onChange(e) {
  //   const file = e.target.files[0];
  //   console.log(file);

  //   try {
  //     await Storage.put(file.name, file, {
  //       contentType: "image/png", // contentType is optional
  //     });
  //   } catch (error) {
  //     console.log("Error uploading file: ", error);
  //   }
  // }

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
      {/* <Text>THIS IS A EXAMPLE</Text>
      <Image source={image} />
      <View>
        <ButtonComponent
          title="download"
          onPress={() => {
            downloadImage();
          }}
        />
        <ButtonComponent
          title="Abrir imagen"
          onPress={() => {
            openCamera();
          }}
        />
      </View> */}
      <TextInput type="file" onChange={onChange} />
      <Text>Hola! {usuario}</Text>
      <ButtonComponent title="LogOut" onPress={onPress} color="#ff3f4f" />
    </View>
  );
}

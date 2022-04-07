import React from "react";
import {
  Image,
  PermissionsAndroid,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
// import * as ImagePicker from "react-native-image-picker";
import galleryImage from "../../../assets/icons/gallery.png";
import cameraImage from "../../../assets/icons/camera.png";

const ImagePicker = require("react-native-image-picker");

const ImagePickerComponent = () => {
  const [responseCamera, setResponseCamera] = React.useState(null);
  const [responseGallery, setResponseGallery] = React.useState(null);

  const openCameraWithPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message: "App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("entra");
        console.log(ImagePicker)
        await ImagePicker.launchCamera(
          {
            mediaType: "photo",
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          (response) => {
            console.log(response);
          }
        ).catch((err) => {
          console.log(err);
        });

        console.log(result);
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openLibrary = async () => {
    const result = new launchImageLibrary({
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    }).catch((err) => {
      console.log(err);
    });

    console.log(result);
    // setResponseGallery(response);
    // setResponseCamera(null);
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 4,
      }}
    >
      <TouchableOpacity onPress={() => openCameraWithPermission()}>
        <Text>OpenCamera</Text>
        {/* {responseCamera === null ? (
          <ButtonComponent title="OpenCamera"></ButtonComponent>
        ) : (
          <Image style={styles.icon} source={{ uri: responseCamera.uri }} />
        )} */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLibrary()}>
        {/* {responseGallery === null ? (
          <Image style={styles.icon} source={galleryImage} />
        ) : (
          <Image style={styles.icon} source={{ uri: responseGallery.uri }} />
        )} */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
  },
});

export default ImagePickerComponent;

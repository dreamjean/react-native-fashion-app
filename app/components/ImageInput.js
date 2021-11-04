import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Platform, Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../config";
import PermissionModal from "./PermissionModal";

function ImageInput({ image, onChangeImage }) {
  const [modelVisible, setModelVisitble] = useState(false);

  useEffect(() => {
    requestMediaLibraryPermission();
  }, []);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestMediaLibraryPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const requestCameraPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
      }
    }
  };

  const pickerImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error @pickImage", error);
    }

    setModelVisitble(false);
  };

  const pickerPhotograph = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error @pickImage", error);
    }

    setModelVisitble(false);
  };

  return (
    <>
      <Pressable
        style={{
          alignSelf: "center",
          justifyContent: "center",
          margin: 5,
        }}
        onPress={() => setModelVisitble(true)}
      >
        <Container>
          {image ? (
            <Image resizeMode="contain" source={{ uri: image }} />
          ) : (
            <Entypo name="camera" size={40} color={colors.lightBlue} />
          )}
        </Container>
      </Pressable>
      <PermissionModal
        visible={modelVisible}
        onCloseModal={() => setModelVisitble(false)}
        onCameraRollPermission={pickerImage}
        onCameraPermission={pickerPhotograph}
      />
    </>
  );
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 3px;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.violet2,
    borderColor: colors.violet,
    margin: space.m1,
  })}
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export default ImageInput;

import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

const AvatarUpload = () => {
  const [avatarUri, setAvatarUri] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Щоб обрати аватарку надай доступ до галереі");
      }
    })();
  }, []);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setIsImageLoaded(true);
      setAvatarUri(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    setIsImageLoaded(false);
    setAvatarUri(null);
  };

  return (
    <TouchableOpacity style={styles.avatarContainer} onPress={selectImage}>
      <View style={styles.avatarImageContainer}>
        {avatarUri ? (
          <Image
            source={{ uri: avatarUri }}
            style={[styles.avatarImage, { opacity: isImageLoaded ? 1 : 0 }]}
          />
        ) : null}
        {avatarUri && (
          <TouchableOpacity
            onPress={removeImage}
            style={styles.closeIconContainer}
          >
            <AntDesign name="closecircleo" size={32} color="#E8E8E8" />
          </TouchableOpacity>
        )}
        {!avatarUri && (
          <TouchableOpacity
            onPress={selectImage}
            style={styles.plusIconContainer}
          >
            <AntDesign name="pluscircleo" size={32} color="#FF6C00" />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f2f2f2",
  },
  avatarImageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  closeIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  plusIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
});

export default AvatarUpload;

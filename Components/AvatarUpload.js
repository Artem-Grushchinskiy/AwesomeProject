import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

const AvatarUpload = () => {
  const [avatarUri, setAvatarUri] = useState(null);

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Щоб обрати аватарку надай доступ до галереі");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatarUri(result.uri);
    }
  };

  const removeImage = () => {
    setAvatarUri(null);
  };

  return (
    <TouchableOpacity style={styles.avatarContainer} onPress={selectImage}>
      <View style={styles.avatarImageContainer}>
        {avatarUri ? (
          <View style={styles.iconsContainer}>
            <Image source={{ uri: avatarUri }} style={styles.avatarImage} />
          </View>
        ) : (
          <View style={styles.iconsContainer}>
            <AntDesign name="pluscircleo" size={32} color="#FF6C00" />
          </View>
        )}
        {avatarUri && (
          <TouchableOpacity
            onPress={removeImage}
            style={styles.closeIconContainer}
          >
            <AntDesign name="closecircleo" size={32} color="#E8E8E8" />
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
    position: "relative",
  },
  avatarImageContainer: {
    flex: 1,
    position: "relative",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  iconsContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  closeIconContainer: {
    position: "absolute",
    bottom: 4,
    right: 4,
    zIndex: 1,
  },
});

export default AvatarUpload;

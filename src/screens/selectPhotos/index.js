import React, { useMemo } from "react";
import { Text, View, StyleSheet, SafeAreaView, Alert } from "react-native";
import { AssetsSelector } from "expo-images-picker";
import { Ionicons } from "@expo/vector-icons";
import { MediaType } from "expo-media-library";
import { useNavigation } from "@react-navigation/native";

const SelectPhotosScreen = () => {
  const navigation = useNavigation();
  const onSuccess = (data: any) => {
    navigation.navigate("Listing", { imageData: data });
  };

  const widgetErrors = useMemo(
    () => ({
      errorTextColor: "black",
      errorMessages: {
        hasErrorWithPermissions: "Please Allow media gallery permissions.",
        hasErrorWithLoading: "There was error while loading images.",
        hasErrorWithResizing: "There was error while loading images.",
        hasNoAssets: "No images found.",
      },
    }),
    []
  );

  const widgetSettings = useMemo(
    () => ({
      getImageMetaData: false, // true might perform slower results
      initialLoad: 100,
      assetsType: [MediaType.photo, MediaType.video],
      minSelection: 1,
      maxSelection: 5,
      portraitCols: 2,
      landscapeCols: 4,
    }),
    []
  );

  const widgetResize = useMemo(
    () => ({
      width: 50,
      compress: 0.7,
      base64: false,
      saveTo: "jpeg",
    }),
    []
  );

  const _textStyle = {
    color: "white",
  };

  const _buttonStyle = {
    backgroundColor: "orange",
    borderRadius: 5,
  };

  const widgetNavigator = useMemo(
    () => ({
      Texts: {
        finish: "finish",
        back: "back",
        selected: "selected",
      },
      midTextColor: "black",
      minSelection: 1,
      buttonTextStyle: _textStyle,
      buttonStyle: _buttonStyle,
      onBack: () => {
        navigation.navigate("Listing");
      },
      onSuccess: (e: any) => onSuccess(e),
    }),
    []
  );

  const widgetStyles = useMemo(
    () => ({
      margin: 2,
      bgColor: "white",
      spinnerColor: "blue",
      widgetWidth: 99,
      videoIcon: {
        Component: Ionicons,
        iconName: "ios-videocam",
        color: "tomato",
        size: 20,
      },
      selectedIcon: {
        Component: Ionicons,
        iconName: "ios-checkmark-circle-outline",
        color: "white",
        bg: "#0eb14970",
        size: 26,
      },
    }),
    []
  );

  return (
    <View style={styles.container}>
      <AssetsSelector
        Settings={widgetSettings}
        Errors={widgetErrors}
        Styles={widgetStyles}
        Navigator={widgetNavigator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SelectPhotosScreen;
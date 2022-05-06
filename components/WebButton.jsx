import React, { useCallback } from "react";
import { Alert, Pressable, Linking, StyleSheet, Text } from "react-native";

const registerUrl = "https://google.com";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, title }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Pressable onPress={handlePress}>
        <Text style={styles.link}>{title}</Text>
      </Pressable>
      ;
};


const styles = StyleSheet.create({
    link: {
        color: "#81C654", textDecorationLine: "underline", fontSize: 24, textAlign: "right", marginTop: "6%"
    }
  });

export default OpenURLButton;
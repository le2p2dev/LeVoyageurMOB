import React from "react";
import { Text, View, Image, StyleSheet, TouchableHighlight } from "react-native";

const BottomView = ( POI ) => {
  
  return (
    <View style={styles.bottomView}>
      <Text>{POI.id.id}</Text>
      <Text>{POI.id.title}</Text>
      <Text>{POI.id.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    bottomView: {
        marginTop: "0%", height: "28%", borderTopWidth: 2, borderColor: '#9EADBA',
    },
});

export default BottomView;

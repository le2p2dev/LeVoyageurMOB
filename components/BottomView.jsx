import React from "react";
import { Text, View, Image, StyleSheet, TouchableHighlight } from "react-native";

const BottomView = ( POI ) => {
  
  return (
    <View style={styles.bottomView}>
      <Text style={styles.text}>{POI.id.title ? POI.id.title : "No title"}</Text>
      <Text styles={styles.desc}>{POI.id.description ? POI.id.description : "No description"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    bottomView: {
        marginTop: "0%", height: "28%", borderTopWidth: 2, borderColor: '#9EADBA',
    },
    text: {
      marginLeft: "1%", color: "#293845", textAlignVertical: "center", fontSize: 22
    },
    desc: {
      marginLeft: "2%", color: "#293845", textAlignVertical: "center", fontSize: 16
    },
});

export default BottomView;

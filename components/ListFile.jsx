import React from "react";
import OpenURLButton from "./WebButton";
import { Text, StyleSheet, Linking, Pressable } from "react-native";

const ListFile = ({files}) =>{

    if(files)
    return(
    files?.map(file => {
        return(
        <Pressable onPress={() => Linking.openURL(file.imageUrl)}>
            <Text style={styles.title}>{file.imageUrl.substring(file.imageUrl.lastIndexOf('/')+1).slice(13)}</Text>
        </Pressable>
        )
    }))

    else return <Text>No file added</Text>
    
}

const styles = StyleSheet.create({
    title: {
        marginLeft: "1%", color: "#293845", textAlignVertical: "center", fontSize: 20, marginBottom: "3%"
    },
});

export default ListFile;
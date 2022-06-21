import React from "react";
import OpenURLButton from "./WebButton";
import { Text } from "react-native";

const ListFile = ({files}) =>{

    if(files)
    return(
    files?.map(file => {
        return(
        <OpenURLButton key={file.id} url={file.imageUrl} title={"open file"}/>
        )
    }))

    else return <Text>no file</Text>
    
}

export default ListFile;
import React from "react";
import OpenURLButton from "./WebButton";
import { Text, Linking } from "react-native";

const ListFile = ({files}) =>{

    

    if(files)
    return(
    files?.map(file => {
        const FileName = file.imageUrl.substring(file.imageUrl.lastIndexOf('/')+1).slice(13)
        return(<>
        <Text style={{color: 'blue', fontSize:20, marginTop:"5%", marginLeft:"5%", textDecorationLine:"underlined"}}
      onPress={() => Linking.openURL(file.imageUrl)}>
    {FileName}
    </Text>

        </>)
    }))

    else return <Text>no file</Text>
    
}

export default ListFile;
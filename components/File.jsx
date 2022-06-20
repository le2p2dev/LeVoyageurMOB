import React from "react";
import OpenURLButton from "./WebButton";

const File = ({files}) =>{

    return(
    files?.map(file => {
        return(
        <OpenURLButton key={file.id} url={file.imageUrl} title={"open file"}/>
        )
    }))
    
}

export default File;
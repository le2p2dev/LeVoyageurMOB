import react, { useState } from "react";
import { Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useMutation, useQueryClient } from "react-query";
import listAPI from "./listApi";
import * as ImagePicker from 'expo-image-picker';
const JournalForm = (id) => {

    const [message,setMessage] = useState();
    const [image, setImage] = useState(null);

    const queryClient = useQueryClient();

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          quality: 1,
        })
    
        if (!result.cancelled) {
            setImage(result.uri);
          }
        
    }

    const postMessage = useMutation(listAPI.postMessage, {
        onSuccess : queryClient.invalidateQueries(id + 'journal')
    }
        )

    const sendJournalEntry = () => {
        setMessage("")
        postMessage.mutate({
            id : id,
            content : message,
            title : message,
            image : image
        })

    }

    

    return(
        <>
        <TextInput value={message} onChangeText={setMessage}/>
        <Button title="send" onPress={sendJournalEntry}/>
        </>
    )

}

export default JournalForm;
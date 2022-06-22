import React from "react";
import { Image, Text, View } from "react-native";
import { useQuery } from "react-query";
import listAPI from "./listApi";

const ListJournalEntry = (id) =>{


    const {isLoading, data} = useQuery(id + 'journal', ()=> listAPI.GetJournal(id))

    if(!isLoading)
    return(
        <>
        <Text>Mon journal de bord</Text>

    {data?.map(e => {
        return(<View key={e.id}>
            <Text>{e.content}</Text>
            <Image source={e.image}/>
            </View>

        )
    })}
    
    </>)
    
    else return <Text>Loading ...</Text>

   
    
}

export default ListJournalEntry;
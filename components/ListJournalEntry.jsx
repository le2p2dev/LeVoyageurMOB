import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { useQuery } from "react-query";
import listAPI from "./listApi";

const ListJournalEntry = (id) =>{


    const {isLoading, data} = useQuery(id + 'journal', ()=> listAPI.GetJournal(id))

    if(!isLoading)
    return(
        <>
        <Text style={styles.title}>Mon journal de bord</Text>

    {data?.map(e => {
        return(<View style={styles.msg} key={e.id}>
            <Text>{e.user.username}</Text>
            <Text style={styles.text}>{e.content}</Text>
            </View>

        )
    })}
    
    </>)
    
    else return <Text>Loading ...</Text>

   
    
};

const styles = StyleSheet.create({
    title: {
        marginLeft: "5%", color: "#293845", textAlignVertical: "center", fontSize: 25, marginBottom: "1%"
    },
    topNav: {
        flexDirection: "row", borderBottomWidth: 2, borderColor: '#838383', justifyContent: "space-between"
    },
    msg: {
        borderRadius: 10, borderBottomWidth: 0, backgroundColor: "#E0E0E0", paddingBottom: "3%", marginBottom:"3%"
    },
    fullView: {
        marginTop: "10%", height: "95%"
    },
    highlight: {
        borderWidth: 2, borderColor: "#838383", height: 54, width: 54, borderRadius: 54, margin: "1.5%"
    },
    icon: {
        height: 50, width: 50
    },
    logo: {
        height: 66, width: 66, alignSelf: "flex-start"
    },
    text: {
        fontSize: 18, marginTop: 10, marginLeft:"5%"
    }
});

export default ListJournalEntry;
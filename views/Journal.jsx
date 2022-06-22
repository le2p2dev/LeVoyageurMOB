import React, {useState, useEffect, useRef} from "react";
import { Text, View, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import JournalForm from "../components/JournalForm";
import ListJournalEntry from "../components/ListJournalEntry";
import NavBar from "../components/NavBar";

const Journal = ({route, navigation}) => {

  return (<>
    <View style={styles.fullView}>
        <View style={styles.topNav}>
            <Text style={styles.title}>Journal</Text>
            <Image style={styles.logo} source={require('../assets/icon.png')}/>
        </View>
        <ScrollView>
            <ListJournalEntry id={route.params.id}/>
            <JournalForm id={route.params.id}/>
        </ScrollView>
    </View>

    {/* NAVIGATION */}
    <NavBar idTrip={route.params.id} />
    </>)};

const styles = StyleSheet.create({
    title: {
        marginLeft: "5%", color: "#293845", textAlignVertical: "center", fontSize: 25, marginBottom: "1%"
    },
    topNav: {
        flexDirection: "row", borderBottomWidth: 2, borderColor: '#838383', justifyContent: "space-between"
    },
    travel: {
        borderRadius: 10, borderWidth: 0, backgroundColor: "#E0E0E0", marginBottom: "3%"
    },
    fullView: {
        marginTop: "10%", height: "88%"
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
        fontSize: 24, alignSelf: "center", marginTop: 10
    }
});

export default Journal;
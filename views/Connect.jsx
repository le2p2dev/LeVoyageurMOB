import React, {useState} from "react";
import { Text, View, Image, Pressable, StyleSheet, TextInput } from "react-native";
import NavBar from "../components/NavBar";

const Connect = ({route, navigation}) => {

    return (<>
    <View style={styles.fullView}>
        <Image  style={styles.logo}
                source={require('../assets/full.png')}/>
        <View style={styles.connectBg}>
            <TextInput style={styles.input} placeholder="Username" keyboardType="email-address" selectionColor={'black'} />
            <TextInput style={styles.input} placeholder="Password" contextMenuHidden secureTextEntry selectionColor={'black'} />
            <Pressable onPress={() => navigation.navigate('Homepage')}>
                <Text style={styles.link}>Connect</Text>
            </Pressable>
        </View>
    </View>
    <NavBar/>
    </>);
  
};



const styles = StyleSheet.create({
    logo: {
        width: 255, height: 105, marginLeft: "-3%"
    },
    title: {
        fontSize: 30, marginTop: "4%"
    },
    rowView: {
        flexDirection: "row", justifyContent: "space-between", marginBottom: "4%"
    },
    fullView: {
        marginTop: '16%', marginHorizontal: '5%', flexGrow: 1
    },
    connectBg: {
        marginTop: "30%"
    },
    link: {
        color: "#81C654", textDecorationLine: "underline", fontSize: 24, textAlign: "right", marginTop: "3%"
    },
    input: {
        padding: "4%", width: "98%", fontSize: 24, borderRadius: 10, borderWidth: 0, backgroundColor: "#E0E0E0", marginBottom: "3%"
    }
});

export default Connect;

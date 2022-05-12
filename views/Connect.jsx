import AsyncStorage from '@react-native-async-storage/async-storage';
import listAPI from "../components/listApi";
import React, {useState} from "react";
import { Text, View, Image, Pressable, StyleSheet, TextInput, AsyncStorageStatic } from "react-native";
import OpenURLButton from "../components/WebButton";

const Connect = ({route, navigation}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    return (<>
    <View style={styles.fullView}>
        <Image  style={styles.logo}
                source={require('../assets/full.png')}/>
        <View style={styles.connectBg}>
            <Text style={styles.error}>{error}</Text>
            <TextInput style={styles.input} placeholder="Username" keyboardType="email-address" selectionColor={'black'} onChange={(e) => {
              setUsername(e.target.value);
            }} />
            <TextInput style={styles.input} placeholder="Password" contextMenuHidden secureTextEntry selectionColor={'black'} onChange={(e) => {
              setPassword(e.target.value);
            }} />
            <Pressable onPress={() => listAPI.Login(username, password)
              .then((data) => {
                    if (data.token) { 
                        AsyncStorage.setItem("token", data.token);
                    };
                    
                    AsyncStorage.getItem("token").then(data => console.log(data))
                    navigation.navigate('Homepage');
                    
            })}>
                <Text style={styles.link}>Connect</Text>
            </Pressable>
            <OpenURLButton url={"http://levoyageur.mathieuv.pro/#/account/create"} title={"Register"}/>
        </View>
    </View>
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
    error: {
        color: "#FF4444", fontSize: 18, textAlign: "left", marginBottom: "1%"
    },
    input: {
        padding: "4%", width: "98%", fontSize: 24, borderRadius: 10, borderWidth: 0, backgroundColor: "#E0E0E0", marginBottom: "3%"
    }
});

export default Connect;

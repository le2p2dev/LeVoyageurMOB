import React, {useState} from "react";
import { Text, View, Image, Pressable, StyleSheet, ScrollView } from "react-native";
import Map from "./Map";

const HomePage = () => {
    const [map, setMap] = useState(null);

    const travelChosen = (test) => { // When a 
        console.log("Pressed");
        setMap(true);
    }

  if(map == null) {
      return (<>
    <View style={styles.fullView}>
        <View style={styles.rowView}>
            <Text style={styles.title}>Your travels</Text>
            <Image  style={styles.logo}
                    source={require('../assets/icon.png')}/>
        </View>
        <View style={styles.scrollview}>
            <ScrollView>
                <Pressable style={styles.travel} onPress={travelChosen}>
                    <Text style={styles.h2}>Strasbourg march 2022</Text>
                    <Image style={styles.banner} source={require('../assets/landscape.jpg')}/>
                </Pressable>
            </ScrollView>
        </View>
        <View style={styles.bottomView}>
           <Text style={styles.link}>Disconnect</Text>
        </View>
    </View>
    </>);
  }
  else {
      return(<>
        <Map/>
      </>)
  }
  
};



const styles = StyleSheet.create({
    scrollview: {
        height: "83%"
    },
    logo: {
        width: 70, height: 70,
    },
    banner: {
        width: "98%", height: 70, marginLeft: "1%", marginVertical: "1%", borderRadius: 8, borderWidth: 0
    },
    title: {
        fontSize: 30, marginTop: "4%"
    },
    travel: {
        borderRadius: 10, borderWidth: 0, backgroundColor: "#ECECEC", marginBottom: "3%"
    },
    h2: {
        fontSize: 20, margin: "1%", textAlign: "center", fontWeight: "bold"
    },
    rowView: {
        flexDirection: "row", justifyContent: "space-between", marginBottom: "4%"
    },
    fullView: {
        marginTop: '16%', marginHorizontal: '6%'
    },
    bottomView: {
        flexDirection: "row", justifyContent: "flex-end", marginTop: "4%"
    },
    link: {
        color: "#240B36", textDecorationLine: "underline", fontSize: 16
    }
});

export default HomePage;

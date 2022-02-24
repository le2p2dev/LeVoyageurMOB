import React from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";

const Settings = () => {
  return (<>
    
    <ScrollView>
        <Text style={styles.text}>Texte centré, en gras et tout et tout, les margin etc la flemme de réécrire</Text>
        <View style={styles.premierContainer}>
            <View style={styles.premier} ><Text style={styles.centered}>Texte au milieu</Text></View>
            <View style={styles.premier} ><Text style={styles.centered}>Texte au milieu</Text></View>
        </View>
        <View style={styles.premierContainer}>
            <View style={styles.deuxieme} ><Text style={styles.centered}>3</Text></View>
            <View style={styles.deuxieme} ><Text style={styles.centered}>3</Text></View>
            <View style={styles.troisieme} ><Text style={styles.centered}>3</Text></View>
        </View>
    </ScrollView>
    <View>
        <View style={styles.footer}>
            <Text style={styles.centered}>Texte au milieu</Text>
        </View>
    </View>
    
  </>);
};


const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
      },
    text: {
        fontWeight: "bold", marginTop: 100, marginHorizontal: 20, textAlign: "center", marginBottom: 15,
    },
    topView: {
        padding: "3%",
        marginTop: "12%",
        height: "10%",
        backgroundColor: "#FFF"
    },
    FlexRow: {
        flex: 1,
        flexDirection: "row",
    },
    input: {
        height: 40, width: 120, borderWidth: 1, borderRadius: 4, borderColor: "lightgray", marginRight: 10, paddingHorizontal: 6,
      },
    btn: {
        padding: 10
    },
    premier: {
        flexGrow: 1, height: 250, margin: 5, backgroundColor: "orange", borderWidth: 6, borderColor: "darkorange"
    },
    deuxieme: {
        width: "38%", height: 100, margin: 5, backgroundColor: "red", borderWidth: 6, borderColor: "darkred"
    },
    troisieme: {
        flexGrow: 1, height: 100, margin: 5, backgroundColor: "red", borderWidth: 6, borderColor: "darkred"
    },
    footer: {
        flexGrow: 1, height: 100, margin: 5, backgroundColor: "lightgreen", borderWidth: 6, borderColor: "darkgreen"
    },
    premierContainer: {
        flex: 1, flexDirection: "row",
    },
    centered: {
        textAlign: "center", flexGrow: 1,
    }
});
export default Settings;

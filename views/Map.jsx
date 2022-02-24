import React, {useState} from "react";
import MapView from 'react-native-maps';
import { Text, View, Image, StyleSheet, ScrollView, Pressable, TouchableHighlight } from "react-native";



const Map = () => {
    var [marker = {
        pinNumber: 0,
        title: "Cliquez sur un point",
        desc: "",
    }, setMarker] = useState("");
    var [touched, setTouched] = useState(false);

    var [state = {
        region: {
        latitude: 48.573406, 
        longitude: 7.752111,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
        },
        markers: []
    }, setState] = useState();
    
    const onMarkerClick = (i) => {
        console.log(i);
        setTouched(i);
        setMarker({pinNumber: i, title: "Titre de base", desc: "C'est la description de l'endroit"});
     }

  return (<>
    <View style={styles.topView}>
        <View style={styles.topNav}>
            <TouchableHighlight style={styles.highlight}>
                <Image style={styles.icon} source={require('../assets/burger.png')} />
            </TouchableHighlight>
            <Text style={styles.title}>Strasbourg March 2022</Text>
            <Image style={styles.logo} source={require('../assets/icon.png')}/>
        </View>
    </View>

    <MapView style={styles.map} region={state.region}
        onPress={(e) => setState({ markers: [...state.markers, { latlng: e.nativeEvent.coordinate }] })}>
        {
            state.markers.map((marker, i) => (
                <MapView.Marker
                    onPress={(e) => {e.stopPropagation(); onMarkerClick(i)}}
                    key={i}
                    coordinate={marker.latlng}
                    
                >
                    {i < 1 &&
                        <View style={[styles.pinCircle, touched == i ? styles.pinCircleChosen : styles.pinCircle]}>
                        <Text style={styles.pinText}>{i ? i : "D"}</Text>
                        </View>
                    }
                </MapView.Marker>
            ))
        }

    </MapView>
    <View style={styles.bottomView}>
        <ScrollView>
            <Pressable style={styles.markerSlot}>
                <Text style={styles.pinNumber}>{marker.pinNumber ? marker.pinNumber : "D"}</Text>
                <Text style={styles.text}>Première étape</Text>
            </Pressable>
            <Pressable style={styles.markerSlot}>
                <Text style={styles.pinNumber}>{marker.pinNumber ? marker.pinNumber : "D"}</Text>
                <Text style={styles.text}>Première étape</Text>
            </Pressable>
            <Pressable style={styles.markerSlot}>
                <Text style={styles.pinNumber}>{marker.pinNumber ? marker.pinNumber : "D"}</Text>
                <Text style={styles.text}>Première étape</Text>
            </Pressable>
            <Pressable style={styles.markerSlot}>
                <Text style={styles.pinNumber}>{marker.pinNumber ? marker.pinNumber : "D"}</Text>
                <Text style={styles.text}>Première étape</Text>
            </Pressable>
            <Pressable style={styles.markerSlot}>
                <Text style={styles.pinNumber}>{marker.pinNumber ? marker.pinNumber : "D"}</Text>
                <Text style={styles.text}>Première étape</Text>
            </Pressable>
            <Pressable style={styles.markerSlot}>
                <Text style={styles.pinNumber}>{marker.pinNumber ? marker.pinNumber : "D"}</Text>
                <Text style={styles.text}>Première étape</Text>
            </Pressable>
            <Pressable style={styles.markerSlot}>
                <Text style={styles.pinNumber}>{marker.pinNumber ? marker.pinNumber : "D"}</Text>
                <Text style={styles.text}>Première étape</Text>
            </Pressable>
        </ScrollView>
        <View style={styles.bottomNav}>
            <TouchableHighlight style={styles.highlight}>
                <Image style={styles.icon} source={require('../assets/left.png')} />
            </TouchableHighlight>
            <Text style={styles.text}>{marker.title}</Text>
            <TouchableHighlight style={styles.highlight}>
                <Image style={styles.icon} source={require('../assets/right.png')} />
            </TouchableHighlight>
        </View>
        

    </View>
    
    </>);
  
};

const styles = StyleSheet.create({
    topNav: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderColor: '#9EADBA',
        justifyContent: "space-between"
    },
    markerSlot: {
        backgroundColor: '#DFE6ED',
        borderBottomWidth: 2,
        borderColor: '#9EADBA', flexDirection: "row", 
    },
    pinNumber: {
        textAlign: "center", color: "#293845", fontSize: 44, fontWeight: "bold", width: "15%"
    },
    pinCircle: {
        width: 25,
        height: 25,
        borderRadius: 100,
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 3,
    },
    pinCircleChosen: {
        width: 25,
        height: 25,
        borderRadius: 100,
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 3,
    },
    pinText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
    map: {
        width: "100%",
        height: "60%",
      },
    title: {
        marginLeft: "1%", color: "#293845", textAlignVertical: "center", fontSize: 20, marginBottom: "1%"
    },
    text: {
        marginLeft: "1%", color: "#293845", textAlignVertical: "center", fontSize: 26
    },
    bottomView: {
        marginTop: "0%",
        height: "28%",
        borderTopWidth: 2,
        borderColor: '#9EADBA',
    },
    bottomNav: {
        flexDirection: "row", justifyContent: "space-between"
    },
    topView: {
        marginTop: "10%"
    },
    input: {
        height: 40, width: 120, borderWidth: 1, borderRadius: 4, borderColor: "lightgray", marginRight: 10, paddingHorizontal: 6,
      },
    highlight: {
        borderWidth: 2, borderColor: "#838383", height: 54, width: 54, borderRadius: 54, margin: "1.5%"
    },
    icon: {
        height: 50, width: 50
    },
    logo: {
        height: 66, width: 66, alignSelf: "flex-start"
    }
});

export default Map;

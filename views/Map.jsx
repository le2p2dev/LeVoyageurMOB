import React, {useState} from "react";
import MapView from 'react-native-maps';
import { Text, View, Alert, TextInput, StyleSheet, Button } from "react-native";



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

    <MapView style={styles.map} region={state.region}
        onPress={(e) => setState({ markers: [...state.markers, { latlng: e.nativeEvent.coordinate }] })}>
        {
            state.markers.map((marker, i) => (
                <MapView.Marker
                    onPress={(e) => {e.stopPropagation(); onMarkerClick(i)}}
                    key={i}
                    coordinate={marker.latlng}
                    
                >
                    {i < 9 &&
                        <View style={[styles.pinCircle, touched == i ? styles.pinCircleChosen : styles.pinCircle]}>
                        <Text style={styles.pinText}>{i ? i : "D"}</Text>
                        </View>
                    }
                </MapView.Marker>
            ))
        }

    </MapView>
    <View style={styles.bottomView}>
        <Text style={styles.title}>{marker.title ? marker.title : "Cliquez sur un point"}</Text>
        <Text style={styles.text}>Etape {marker.pinNumber ? marker.pinNumber : "de départ"}</Text>
        <Text style={styles.text}>{marker.desc}</Text>
    </View>
    
    </>);
  
};



const styles = StyleSheet.create({
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
        marginTop: "12%",
        height: "60%",
      },
    title: {
        fontWeight: "bold",
        fontSize: 16, textAlign: "center", marginBottom: "2%",
    },
    text: {
        marginBottom: "1%",
    },
    bottomView: {
        padding: "3%",
        marginTop: "0%",
        height: "40%",
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
    }
});

export default Map;

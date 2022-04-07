import React, {useState, useEffect, useRef} from "react";
import MapView, { Marker } from 'react-native-maps';
import { Text, View, Image, StyleSheet, TouchableHighlight, Touchable } from "react-native";
import listAPI from "../components/listApi";
import BottomView from "../components/BottomView"
import NavBar from "../components/NavBar";
import { useQuery } from 'react-query';

const Map = ({route, navigation}) => {
    
    const { isLoading, data:markerList } = useQuery(route.params.id + 'markers', () => listAPI.GetPOIsFromTrip(route.params.id));
    const { isLoading:isLoadingTrip, data:trip } = useQuery(route.params.id + 'tripDesc', () => listAPI.GetTrip(route.params.id));
    const { isLoading:isLoadingSteps, data:steps } = useQuery(route.params.id + 'tripSteps', () => listAPI.GetStepsFromTrip(route.params.id));
    
    const [ POIInfos, setPOIInfos ] = useState(null);

    if(!isLoadingTrip || !isLoading || !isLoadingSteps) {
  return (<>
    <View style={styles.fullView}>

        {/* TOP NAV AND TITLE */}
        <View style={styles.topNav}>
            <TouchableHighlight style={styles.highlight} onPress={() => navigation.navigate('Homepage')}>
                <Image style={styles.icon} source={require('../assets/back.png')} />
            </TouchableHighlight>
            <Text style={styles.title}>{isLoadingTrip ? null : trip.response[0].title}</Text>
            <Image style={styles.logo} source={require('../assets/icon.png')}/>
        </View>

        {/* MAP VIEW */}
        <MapView onPress={() => setPOIInfos(null)} style={POIInfos ? styles.map50 : styles.map80} showsUserLocation={true} initialRegion={{
          latitude: steps == null ? 48.57 : steps.response[0].latitude,
          longitude: steps == null ? 7.75 : steps.response[0].longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
            {
                markerList?.response.map(
                    (e, i) => {
                        return (
                        <MapView.Marker
                            key={i}
                            coordinate={{latitude: e.latitude, longitude: e.longitude}}
                            onPress={() => setPOIInfos({id: e.id, title: e.title, description: e.description})}>
                        </MapView.Marker>
                        )
                    }
                )
            }
            {
                steps?.response.map(
                    (s, i) => {
                        if(!isLoadingSteps) 
                        return (
                        <MapView.Marker
                            pinColor={'green'}
                            key={i}
                            coordinate={{latitude: s.latitude, longitude: s.longitude}}
                            onPress={() => setPOIInfos({id: s.id, title: s.title, description: s.description})}>
                        </MapView.Marker>
                        )
                    }
                )
            }

        </MapView>

        {/* BOTTOM VIEW */}
        {
            POIInfos ? <BottomView id={POIInfos}/> : console.log()
        }
    </View>

    {/* NAVIGATION */}
    <NavBar idTrip={route.params.id} />
    
    </>)}
    else {
        return(<><Text>Loading...</Text></>)
    }};

const styles = StyleSheet.create({
    topNav: {
        flexDirection: "row", borderBottomWidth: 1, borderColor: '#838383', justifyContent: "space-between"
    },
    markerSlot: {
        backgroundColor: '#DFE6ED', borderBottomWidth: 2, borderColor: '#838383', flexDirection: "row", 
    },
    pinCircle: {
        width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', borderColor: 'red', borderWidth: 3,
    },
    pinCircleChosen: {
        width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', borderColor: 'blue', borderWidth: 3,
    },
    pinText: {
        color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 15,
    },
    map50: {
        width: "100%", height: "60%",
      },
    map80: {
        width: "100%", height: "91%",
      },
    title: {
        marginLeft: "1%", color: "#293845", textAlignVertical: "center", fontSize: 20, marginBottom: "1%"
    },
    text: {
        marginLeft: "1%", color: "#293845", textAlignVertical: "center", fontSize: 26
    },
    bottomView: {
        marginTop: "0%", height: "28%", borderTopWidth: 2, borderColor: '#838383',
    },
    bottomNav: {
        flexDirection: "row", justifyContent: "space-between"
    },
    fullView: {
        marginTop: "10%", height: "88%"
    },
    input: {
        height: 40, width: 120, borderWidth: 1, borderRadius: 4, borderColor: "lightgray", marginRight: 10, paddingHorizontal: 6,
      },
    highlight: {
        borderWidth: 2, borderColor: "#838383", height: 54, width: 54, borderRadius: 54, margin: "1.5%"
    },
    highlightDes: {
        borderWidth: 2, borderColor: "#CACACA", height: 54, width: 54, borderRadius: 54, margin: "1.5%"
    },
    icon: {
        height: 50, width: 50, tintColor: "#444"
    },
    iconDes: {
        height: 50, width: 50, tintColor: "#CACACA"
    },
    logo: {
        height: 66, width: 66, alignSelf: "flex-start"
    }
});

export default Map;
import React, {useState, useEffect, useRef} from "react";
import MapView, { Marker } from 'react-native-maps';
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import listAPI from "../components/listApi";
import BottomView from "../components/BottomView"
import NavBar from "../components/NavBar";
import { useQuery} from 'react-query';

const ListView = ({route, navigation}) => {
    
    const { isLoading, data:markerList } = useQuery(route.id + 'markers', () => listAPI.GetPOIsFromTrip(route.params.id));
    const { isLoading:isLoadingTrip, data:trip } = useQuery(route.id + 'tripDesc', () => listAPI.GetTrip(route.params.id));
    const [ POIInfos, setPOIInfos ] = useState(null);

  return (<>
    <View style={styles.fullView}>
        <View style={styles.topNav}>
            {
                isLoadingTrip ? console.log("[Trip] : Loading...") :
                    <Text style={styles.title}>{trip.response[0].title}</Text>
            }
            <Image style={styles.logo} source={require('../assets/icon.png')}/>
        </View>
        <ScrollView>

        </ScrollView>
    </View>

    <NavBar/>
    
    </>)};

const styles = StyleSheet.create({
    topNav: {
        flexDirection: "row", borderBottomWidth: 2, borderColor: '#838383', justifyContent: "space-between"
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
        width: "100%", height: "50%",
      },
    map80: {
        width: "100%", height: "80%",
      },
    title: {
        marginLeft: "5%", color: "#293845", textAlignVertical: "center", fontSize: 25, marginBottom: "1%"
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
    icon: {
        height: 50, width: 50
    },
    logo: {
        height: 66, width: 66, alignSelf: "flex-start"
    }
});

export default ListView;
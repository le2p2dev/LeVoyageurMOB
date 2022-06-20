import React, {useState, useEffect, useRef} from "react";
import ListDays from "../components/ListDays";
import MapView, { Marker } from 'react-native-maps';
import { Text, View, Image, StyleSheet, ScrollView, Pressable, Button } from "react-native";
import listAPI from "../components/listApi";
import BottomView from "../components/BottomView"
import NavBar from "../components/NavBar";
import { useQuery} from 'react-query';
import ListFile from "../components/ListFile";
const ListView = ({route, navigation}) => {
    
    const { isLoading:isLoadingTrip, data:trip } = useQuery(route.params.id + 'tripDesc', () => listAPI.GetTrip(route.params.id));
    const { isLoading:isLoadingSteps, data:steps } = useQuery(route.params.id + 'tripSteps', () => listAPI.GetStepsFromTrip(route.params.id));
    

  return (<>
    <View style={styles.fullView}>
        <View style={styles.topNav}>
            {
                isLoadingTrip ? console.log("[Trip] : Loading...") :
                    <Text style={styles.title}>{trip.title}</Text>
            }
            <Image style={styles.logo} source={require('../assets/icon.png')}/>
        </View>
        <ScrollView>
        {
        isLoadingSteps ? console.log() : (
            steps.map(
                (s, i) => {
                    return (<View style={styles.stepView} key={i}>
                        <Text style={styles.stepTitle}>{s.title ? s.title : "No title"}</Text>
                        <Text style={styles.h3}>{s.description ? s.description : "No description"}</Text>
                        <Button onPress={()=>navigation.navigate("Map",{id : trip.id, markerData : s})} title="go to map"/>
                        <ListDays idStep={s.id} idTrip={trip.id} navigation={navigation}></ListDays>
                        <ListFile files={s.Files}/>
                    </View>)
                }
            )
        ) 
        }

        </ScrollView>
    </View>

    <NavBar idTrip={route.params.id} />
    
    </>)};

const styles = StyleSheet.create({
    topNav: {
        flexDirection: "row", borderBottomWidth: 1, borderColor: '#838383', justifyContent: "space-between"
    },
    h3: {
        fontSize: 14, marginBottom: "1%", marginHorizontal: "3%", textAlign: "left"
    },
    title: {
        marginLeft: "5%", color: "#293845", textAlignVertical: "center", fontSize: 25, marginBottom: "1%"
    },
    stepTitle: {
        marginLeft: "1%", color: "#293845", fontSize: 28, fontWeight: "bold", alignSelf: "center"
    },
    fullView: {
        marginTop: "10%", height: "88%"
    },
    stepView: {
        borderBottomColor: "#838383", borderBottomWidth: 2, paddingVertical: "2%"
    },
    POIView: {
        borderTopColor: "#DDD", borderTopWidth: 1, paddingVertical: "2%"
    },
    icon: {
        height: 50, width: 50
    },
    logo: {
        height: 66, width: 66, alignSelf: "flex-start"
    }
});

export default ListView;
import React, {useState} from "react";
import { Text, View, Image, Pressable, StyleSheet, ScrollView } from "react-native";
import listAPI from "../components/listApi";
import { useQuery } from 'react-query';

const HomePage = ({route, navigation}) => {

  

    const { isLoading, data:tripList } = useQuery('trips', listAPI.GetTrips)

    
      return (<>
    <View style={styles.fullView}>
        <View style={styles.rowView}>
            <Text style={styles.title}>Your trips</Text>
            <Image  style={styles.logo}
                    source={require('../assets/icon.png')}/>
        </View>
        <View style={styles.scrollview}>
            <ScrollView>
            {
            isLoading ? <Text>Loading...</Text>: (
                tripList?.map(
                    (e) => {
                        return (
                            <Pressable style={styles.travel} onPress={() => navigation.navigate('Map', {id: e.id})} key={e.id}>
                                <Text style={styles.h2}>{e.title}</Text>
                                <Text style={styles.h3}>{e.description}</Text>
                                <Image style={styles.banner} source={require('../assets/landscape.jpg')}/>
                            </Pressable>
                        )
                    }
                )
            ) 
        }
            </ScrollView>
        </View>
        <View style={styles.bottomView}>
            <Pressable onPress={() => navigation.navigate('Connect')}>
               <Text style={styles.link}>Disconnect</Text>
            </Pressable>
        </View>
    </View>
    </>);
  
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
        borderRadius: 10, borderWidth: 0, backgroundColor: "#E0E0E0", marginBottom: "3%"
    },
    h2: {
        fontSize: 20, marginTop: "1%", marginHorizontal: "1%", textAlign: "center", fontWeight: "bold"
    },
    h3: {
        fontSize: 14, marginBottom: "1%", marginHorizontal: "1%", textAlign: "center", fontWeight: "bold"
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
        color: "#240B36", textDecorationLine: "underline", fontSize: 20
    }
});

export default HomePage;

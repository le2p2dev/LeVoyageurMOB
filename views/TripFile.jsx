import react from "react";
import { useQuery } from "react-query";
import listApi from "../components/listApi"
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import ListFile from "../components/ListFile";
import NavBar from "../components/NavBar";

const TripFile = ({route}) => {

    const {isLoading, data} = useQuery(route.params.id+'tripDesc',()=> listApi.GetTrip(route.params.id))

    if(!isLoading)
    return(
        <View style={styles.fullView}>
            <View style={styles.topNav}>
                <Text style={styles.title}>Files</Text>
                <Image style={styles.logo} source={require('../assets/icon.png')}/>
            </View>
            <ScrollView>
                <Text style={styles.title}>{data?.title}</Text>
                <ListFile files={data?.Files}/>
                <ListFile files={data?.Files}/>
            </ScrollView>
        {/* NAVIGATION */}
        <NavBar idTrip={route.params.id} />
        </View>
    )
    else return <Text>Loading ...</Text>


};

const styles = StyleSheet.create({
    title: {
        marginLeft: "5%", color: "#293845", textAlignVertical: "center", fontSize: 25, marginBottom: "1%"
    },
    topNav: {
        flexDirection: "row", borderBottomWidth: 2, borderColor: '#838383', justifyContent: "space-between"
    },
    travel: {
        borderRadius: 10, borderWidth: 0, backgroundColor: "#E0E0E0", marginBottom: "3%"
    },
    fullView: {
        marginTop: "10%", height: "95%"
    },
    highlight: {
        borderWidth: 2, borderColor: "#838383", height: 54, width: 54, borderRadius: 54, margin: "1.5%"
    },
    icon: {
        height: 50, width: 50
    },
    logo: {
        height: 66, width: 66, alignSelf: "flex-start"
    },
    text: {
        fontSize: 24, alignSelf: "center", marginTop: 10
    }
});

export default TripFile;
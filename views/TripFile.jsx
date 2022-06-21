import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import NavBar from "../components/NavBar";
import { useQuery } from "react-query";
import listApi from "../components/listApi"
import ListFile from "../components/ListFile";

const TripFile = ({route, navigation}) => {

const {isLoading, data} = useQuery(route.params.id+'tripDesc',()=> listApi.GetTrip(route.params.id))

    if(!isLoading) {
    return (<>
    <View style={styles.fullView}>
        <View style={styles.topNav}>
            <Text style={styles.title}>Files</Text>
            <Image style={styles.logo} source={require('../assets/icon.png')}/>
        </View>
        <ScrollView>
        
        <Text>Fichiers du voyage : {data?.title}</Text>
        <ListFile style={styles.listFiles} files={data?.Files}/>

        </ScrollView>
    </View>
    <NavBar idTrip={route.params.id} />
    </>)}
    else {
    return (<Text>Loading...</Text>)}};

const styles = StyleSheet.create({
    title: {
        marginLeft: "5%", color: "#293845", textAlignVertical: "center", fontSize: 25, marginBottom: "1%"
    },
    topNav: {
        flexDirection: "row", borderBottomWidth: 2, borderColor: '#838383', justifyContent: "space-between"
    },
    fullView: {
        marginTop: "10%", height: "88%"
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
    listFiles: {
        alignItems: "flex-start"
    }
});

export default TripFile;
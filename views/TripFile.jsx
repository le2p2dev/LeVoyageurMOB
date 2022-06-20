import react from "react";
import { useQuery } from "react-query";
import listApi from "../components/listApi"
import { Text } from "react-native";
import File from "../components/File";

const TripFile = ({route}) => {

    const {isLoading, data} = useQuery(route.params.id+'tripDesc',()=> listApi.GetTrip(route.params.id))

    if(!isLoading)
    return(
        <>
        <Text>Fichiers du voyage : {data?.title}</Text>
        <File files={data?.Files}/>

        </>
    )
    else return <Text>Loading ...</Text>


}

export default TripFile;
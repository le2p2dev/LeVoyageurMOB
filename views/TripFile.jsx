import react from "react";
import { useQuery } from "react-query";
import listApi from "../components/listApi"
import { Text } from "react-native";
import ListFile from "../components/ListFile";

const TripFile = ({route}) => {

    const {isLoading, data} = useQuery(route.params.id+'tripDesc',()=> listApi.GetTrip(route.params.id))

    if(!isLoading)
    return(
        <>
        <Text>Fichiers du voyage : {data?.title}</Text>
        <ListFile files={data?.Files}/>

        </>
    )
    else return <Text>Loading ...</Text>


}

export default TripFile;
import { useQuery } from "react-query";
import listAPI from "./listApi";
import { Text, View, Image, StyleSheet, ScrollView, Pressable, Button } from "react-native";
import ListFile from "./ListFile";
const ListPois = ({ idDay, idStep, idTrip, navigation }) => {
  const { isLoading, data } = useQuery(idDay + "DayPOIs", () =>
    listAPI.GetPOIsFromDay({ idStep, idDay, tripId: idTrip })
  );

  if (isLoading) return (<Text>Loading</Text>)
  else {
    return(<View style={styles.pois}>
        {console.log(data)}
      {data.Pois?.map((poi) => {
        return(
            <Text style={styles.text}>
              {poi.title ? poi.title : "No title"}
              <Button onPress={()=>navigation.navigate("Map",{id : idTrip, markerData : poi})} title="go to map"/>
              <ListFile files={poi.Files}/>
            </Text>
          )
      })}
    
    </View>)
    
    
};
};

const styles = StyleSheet.create({
  pois: {
      
  },
  text: {
    marginLeft: 4, fontSize: 16
  }
});

export default ListPois;

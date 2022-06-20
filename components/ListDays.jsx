import { useQuery } from "react-query";
import listAPI from "./listApi";
import { Text, View, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import ListPois from "./ListPois";

const ListDays = ({ idStep, idTrip , navigation}) => {
  const { isLoading, data: days } = useQuery(idStep + "days", () =>
    listAPI.GetDaysfromStep({ idStep: idStep, tripId: idTrip })
  );

  if (isLoading) return (<Text>Loading</Text>)
  else {
    return(<View style={styles.days}>
      {days.map((day) => {
        return(
          <View style={styles.dayView}>
            <Text style={styles.text}>
              Day {day.number}
            </Text>
            <ListPois idStep={idStep} idTrip={idTrip} idDay={day.id} navigation={navigation} />
            
          </View>
          )
      })}
    
    </View>)
    
    
};
};

const styles = StyleSheet.create({
  days: {
    justifyContent: "space-between", marginHorizontal: "3%"
  },
  dayView: {
    borderColor: "#909090", borderWidth: 1, borderRadius: 10, paddingVertical: "2%"
  },
  text: {
    marginLeft: 4, fontSize: 18
  }
});

export default ListDays;

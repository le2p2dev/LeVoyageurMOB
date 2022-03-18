import React from "react";
import { Text, View, Image, Pressable, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native';

const NavBar = ({route}) => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.bottom}>
      <TouchableHighlight style={styles.highlight} 
      onPress={() => navigation.navigate('Homepage')}
      underlayColor="#CCCCCC">
        <Image style={styles.icon} source={require('../assets/compass.png')} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.highlight} onPress={() => navigation.navigate('Homepage')}
      underlayColor="#CCCCCC">
        <Image style={styles.icon} source={require('../assets/list.png')} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.highlight} onPress={() => navigation.navigate('Homepage')}
      underlayColor="#CCCCCC">
        <Image style={styles.iconDes} source={require('../assets/book.png')} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.highlight} onPress={() => navigation.navigate('Homepage')}
      underlayColor="#CCCCCC">
        <Image style={styles.iconDes} source={require('../assets/expenses.png')} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
      bottom: 0, height: "7.5%", flexDirection: "row", justifyContent: "space-around", borderTopWidth: 1, borderColor: "#3F3F3F"
  },
  highlight: {
    height: 60, width: 60
  },
  icon: {
    height: 50, width: 50, margin: 5, tintColor: "#3F3F3F"
  },
  iconDes: {
    height: 50, width: 50, margin: 5, tintColor: "#CACACA"
  }
});

export default NavBar;

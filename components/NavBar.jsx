import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Map from "../views/Map";
import Settings from "../views/Settings";


const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <NavigationContainer style={{ backgroundColor: "red" }}>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
          tabBarIconStyle: { display: "none" },
          tabBarActiveTintColor: 'tomato',
          tabBarStyle: {
            backgroundColor: "rgba(255, 255, 255,1.0)",
            height: "6%",
            paddingBottom: "4%",
          },
          tabBarLabelStyle: {
            fontSize: 20,
            margin: 0,
            padding: 0,
          },
          
        })}
      >
        <Tab.Screen name="Carte" component={Map}/>
        <Tab.Screen name="Options" component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;

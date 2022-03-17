import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider, QueryClient } from 'react-query';

import Homepage from "./views/Homepage";
import Map from "./views/Map";
import Settings from './views/Settings';
import Connect from './views/Connect';

export default function App() {

  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();


  return (<QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Connect" component={Connect} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </QueryClientProvider>
);

}

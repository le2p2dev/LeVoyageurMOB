import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider, QueryClient } from 'react-query';

import Homepage from "./views/Homepage";
import Map from "./views/Map";
import Settings from './views/Settings';
import Connect from './views/Connect';
import ListView from './views/ListView';
import Expenses from './views/Expenses';
import Journal from './views/Journal';
import TripFile from './views/TripFile';

export default function App() {

  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();


  return (<QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connect" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="ListView" component={ListView} />
        <Stack.Screen name="Journal" component={Journal} />
        <Stack.Screen name="Expenses" component={Expenses} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Connect" component={Connect} />
        <Stack.Screen name="Files" component={TripFile} />

      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </QueryClientProvider>
);

}
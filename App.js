import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import Homepage from "./views/Homepage";
import * as SplashScreen from 'expo-splash-screen';
import { QueryClientProvider, QueryClient } from 'react-query';

export default function App() {

  const queryClient = new QueryClient();


  return (<QueryClientProvider client={queryClient}>
    <Homepage />
    <StatusBar style="auto" />
    </QueryClientProvider>
);

}

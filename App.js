import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from 'react-native';
import Homepage from "./views/Homepage";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function prepare() {
        try {
            await SplashScreen.preventAutoHideAsync(); // affichage
            // On fait une pause 2 sec pour simuler un chargement lent
            await new Promise(resolve => setTimeout(resolve, 2000));
        
        } catch (e) { console.warn(e); } finally {
            setReady(true);
            await SplashScreen.hideAsync(); // masquage
        }
    } prepare();
}, []);

if(!ready) {
  return null;
}

  return (<>
       <Homepage />
       <StatusBar style="auto" />
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

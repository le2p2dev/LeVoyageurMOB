import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import Homepage from "./views/Homepage";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function prepare() {
        try {
            await SplashScreen.preventAutoHideAsync(); // affichage
        
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

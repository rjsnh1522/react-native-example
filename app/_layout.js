import { Stack } from 'expo-router/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import {useFonts, 
  Poppins_400Regular, 
  Poppins_600SemiBold, 
  Poppins_700Bold,
  Poppins_200ExtraLight, 
  Poppins_100Thin, 
  Poppins_300Light, 
  Poppins_500Medium, 
  Poppins_900Black, Poppins_800ExtraBold} from "@expo-google-fonts/poppins"
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_200ExtraLight,
    Poppins_100Thin, 
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_900Black,
    Poppins_800ExtraBold
  })
  console.log(loaded)
  useEffect(()=>{
    if (loaded){
      SplashScreen.hideAsync();
    }
  }, [loaded])

  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: true }} />
      </Stack>
  );
}

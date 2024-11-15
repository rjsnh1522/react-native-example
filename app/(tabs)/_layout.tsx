import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import {View} from "react-native";

export default function TabLayout() {
  return (
    <Tabs 
    screenOptions={{ tabBarActiveTintColor: 'blue', tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color }) => {
            return (
                <View style={{
                    width: 70,
                    height: 70,
                    backgroundColor: "#d3d3d3",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center"
                    }}>
                        <Ionicons name="scan" size={24} color="black" />

                </View>
            )
          }
          ,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}

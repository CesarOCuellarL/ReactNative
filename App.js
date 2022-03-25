import React, { useState } from "react"; 

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@react-native-vector-icons/Ionicons";

import LoginScreen from "./src/pages/Login";
import SettingsScreen from "./src/pages/Settings";
import HomeScreen from "./src/pages/Home";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      {!user ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            children= {(props) => (
              <LoginScreen {...props} onPress={()=> setUser(true)} />
            )}
            name="Login"
          />
        </Stack.Navigator>
        ) : (
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size}) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Settings"){
                iconName = "ios-list";
              }

              return <Ionicons name={IconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
          })}
          >
            <Tab.Screen 
            name="Home"
            children={(props) => (
              <HomeScreen {...props} onPress={() => setUser(null)}/>
            )}
            />
            <Tab.Screen name="Settings" component={SettingsScreen}/>
          </Tab.Navigator>
        )}
    </NavigationContainer>
  );
}
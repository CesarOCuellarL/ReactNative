import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GlobalContext } from "../../context/global/global.context";
import CatalogoScreen from "../../pages/Catalogo";
import HomeScreen from "../../pages/Home";
import SettingsScreen from "../../pages/Settings";

const Tab = createBottomTabNavigator();

export default function MainNavigator({ user }) {
  const { state, login, logout } = useContext(GlobalContext);

  useEffect(()=>{
    login();
  },[user])

  return (
    <NavigationContainer>
      {state.user && (
        <Tab.Navigator
          initialRouteName="Informacion Alumnos"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Registro Libros") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Catalogo") {
                iconName = focused ? "ios-book" : "ios-book-outline";
              } else if (route.name === "Informacion Alumnos") {
                iconName = "ios-person";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Registro Libros" component={HomeScreen} />
          <Tab.Screen name="Catalogo" component={CatalogoScreen} />
          <Tab.Screen
            name="Informacion Alumnos"
            
            children={(props) => (
              <SettingsScreen {...props} onPress={logout} user={user} />
            )}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

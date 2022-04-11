import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "../page/homepage/index";
import { ProfilePage } from "../page/profile/index";
import { Notifications } from "../page/notifications/index";

const Tab = createBottomTabNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({}) => <Ionicons name="home-outline" size={25} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="MainProfile"
          component={ProfilePage}
          options={{
            tabBarIcon: ({}) => <Ionicons name="person-outline" size={25} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({}) => (
              <Ionicons name="notifications-outline" size={25} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

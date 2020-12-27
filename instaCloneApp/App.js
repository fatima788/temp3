import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Button, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screen/login";
import SignUpScreen from "./screen/SignUp";
import HomeScreen from "./screen/Home";
import Icon from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login Screen",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title:"Instagram",
            headerRight: () => (
              <View flexDirection="row">
              <Pressable onPress={() => alert("its working")}>
                  <Icon style={{marginEnd:10}} name="comments" size={23} />
              </Pressable>          
              <Pressable onPress={() => alert("its working")}>
                  <Icon style={{marginEnd:3}}padding={3} name="plus-square" size={23}/>
              </Pressable>

              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

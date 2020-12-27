import React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Button,
  Pressable,
  Image,
} from "react-native";
import InputField from "../src/components/Input";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const stack = createStackNavigator();
export default function Login({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Instagram</Text>
      <InputField title="Mobile Number, username or Email" />
      <InputField title="Password" />

      <Pressable
        onPress={()=>navigation.navigate("Home")}
        style={styles.Fbtn}
      >
        <Text style={styles.FbtnText}>Log In</Text>
      </Pressable>
      <Text style={styles.line}> ────────── OR ──────────</Text>
      <Pressable style={styles.Fbtn}>
        <Text style={styles.FbtnText}>
          <Text style={styles.Fbox}> f </Text>
          {"  "}Login with Facebook
        </Text>
      </Pressable>

      <Text style={styles.agree}>Forgot Password? </Text>
      <Text style={{ color: "black", paddingTop: 13 }}>
        Don't have an account?{" "}
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ color: "dodgerblue" }}>Sign Up</Text>
        </Pressable>
      </Text>
      <Text>Get the app.</Text>
      <View flexDirection="row">
        <Pressable>
          <Image
            source={require("../src/images/apple.png")}
            style={{ height: 40, width: 123, marginTop: 12, marginLeft: 8 }}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require("../src/images/google.png")}
            style={{ height: 40, width: 123, marginTop: 12, marginLeft: 6 }}
          />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    lineHeight: 60,
    paddingTop: 40,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  Fbtn: {
    margin: 20,
    width: 250,
    height: 30,
    backgroundColor: "dodgerblue",
    borderRadius: 4,
  },
  FbtnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 4,
  },
  Fbox: {
    backgroundColor: "white",
    color: "dodgerblue",
    textAlign: "center",
  },
  agree: {
    textAlign: "center",
    fontSize: 12,
    color: "darkgray",
    marginLeft: 43,
    marginRight: 43,
  },
});

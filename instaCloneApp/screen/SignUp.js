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
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InputField from "../src/components/Input";
import AppBtn from "../src/components/Appbtn";
import MyIcon from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();

export default function SignUp({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Instagram</Text>
      <Text style={styles.Subtitle}>
        Sign up to see photos and videos {"\n"}
        from your friends.
      </Text>

      <Pressable style={styles.Fbtn}>
        <Text style={styles.FbtnText}>
          <Text style={styles.Fbox}> f </Text>
          {"  "}Login with Facebook
        </Text>
      </Pressable>

      <Text style={styles.line}> ────────── OR ──────────</Text>
      <InputField title="Mobile Number or Email" />
      <InputField title="Full Name" />
      <InputField title="Username" />
      <InputField title="Password" />
      <Pressable style={styles.Fbtn} onPress={()=>navigation.navigate("Home")}>
        <Text style={styles.FbtnText}>Sign Up</Text>
      </Pressable>
      <Text style={styles.agree}>
        By signing up, you agree to our Terms , Data{"\n"}
        Policy and Cookies Policy .
      </Text>
      <Text style={{ color: "black", paddingTop: 13 }}>
        Have an account?
        <Pressable onPress={()=>navigation.navigate("Login")}>

          <Text style={{ color: "dodgerblue" }}>Log in</Text>
 
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
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
    paddingTop: 0,
  },
  Subtitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
    marginLeft: 43,
    marginRight: 43,
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
  line: {
    color: "darkgray",
    width: 250,
    fontWeight: "bold",
    marginBottom: 10,
  },
  agree: {
    textAlign: "center",
    fontSize: 12,
    color: "darkgray",
    marginLeft: 43,
    marginRight: 43,
  },
});

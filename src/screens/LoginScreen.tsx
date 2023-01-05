import React, { useEffect, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../config/firebaseConfig";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Constructors");
      }
    });
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate("MoreContentScreen");
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate("MoreContentScreen");
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView className="flex-1 align-center">
      <Text className="font-bold px-3 my-14 text-4xl mx-auto text-center">
        Login or Register for more content
      </Text>
      <View className="w-4/5 justify-center align-center mx-auto">
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          className="w-full h-12 px-4 pb-3 mb-4 text-lg border border-black rounded-lg bg-white text-black"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          className="w-full h-12 px-4 pb-3 mb-4 text-lg border border-black rounded-lg bg-white text-black"
          secureTextEntry
        />
      </View>

      <View className="w-3/5 justify-center align-center mx-auto">
        <TouchableOpacity
          onPress={handleLogin}
          className="w-full h-12 px-4 mb-4 rounded-lg bg-black justify-center"
        >
          <Text className="text-lg text-center text-white">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          className="w-full h-12 px-4 mb-4 border border-black rounded-lg bg-white justify-center"
        >
          <Text className="text-lg text-center">Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

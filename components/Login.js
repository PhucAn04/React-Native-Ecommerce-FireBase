import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

import ScreenWrapper from "../components/ScreenWrapper";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      Alert.alert("Notification", "Please enter full Email and Password");
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigation.replace("Home");
    } catch (error) {
      setLoading(false);
      let errorMessage = "An error occurred. Please try again.";

      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid email";
          break;
        case "auth/user-disabled":
          errorMessage = "Account has been disabled";
          break;
        case "auth/user-not-found":
          errorMessage = "Account not found";
          break;
        case "auth/wrong-password":
          errorMessage = "Password is incorrect";
          break;
      }

      Alert.alert("Login failed", errorMessage);
    }
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Image
              source={require("./Picture/LoginPicture.png")}
              style={styles.avatar}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            {/* Input mật khẩu với icon xem/ẩn */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#555"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[styles.button, loading && { opacity: 0.7 }]}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Login</Text>
              )}
            </TouchableOpacity>

            <Text
              style={styles.forgotPassword}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Forgot password?
            </Text>

            <Text style={styles.signUpText}>
              Don't have an account?
              <Text
                style={styles.signUpLink}
                onPress={() => navigation.navigate("Register")}
              >
                {" "}
                Sign up now
              </Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 15,
    justifyContent: "space-between",
  },
  passwordInput: {
    flex: 1,
    height: "100%",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  forgotPassword: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 14,
  },
  signUpText: {
    marginTop: 10,
    fontSize: 14,
  },
  signUpLink: {
    color: "red",
    fontWeight: "bold",
  },
});

export default LoginScreen;

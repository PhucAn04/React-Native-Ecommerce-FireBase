// App.js
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { auth } from "./firebase-config"; // import đúng auth
import { onAuthStateChanged } from "firebase/auth"; // import hàm onAuthStateChanged modular
import "react-native-get-random-values";

// Import các màn hình
import HomeScreen from "./components/Home";
import LoginScreen from "./components/Login";
import RegisterScreen from "./components/Register";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen";

import UserScreen from "./components/User";
import NotificationScreen from "./components/Notification";
import HistoryScreen from "./components/History";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import About from "./components/About";
import ProfileScreen from "./components/Profile";

import DesktopScreen from "./components/Desktop";
import MobileScreen from "./components/Mobile";
import LaptopScreen from "./components/Laptop";
import TabletScreen from "./components/Tablet";
import HeadphoneScreen from "./components/Headphone";
import CheckoutScreen from "./components/Checkout";
import OrderScreen from "./components/YourOrder";

import { CartProvider } from "./components/CartContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });

    return unsubscribe; // unsubscribe khi component unmount
  }, [initializing]);

  if (initializing) {
    return null; // Hoặc bạn có thể hiển thị màn hình loading ở đây
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CartProvider>
        <NavigationContainer>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#ffffff"
            translucent={false}
          />
          <Stack.Navigator
            initialRouteName={user ? "Home" : "Login"}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />

            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
            <Stack.Screen name="History" component={HistoryScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Profile" component={ProfileScreen} />

            <Stack.Screen name="DesktopScreen" component={DesktopScreen} />
            <Stack.Screen name="MobileScreen" component={MobileScreen} />
            <Stack.Screen name="LaptopScreen" component={LaptopScreen} />
            <Stack.Screen name="TabletScreen" component={TabletScreen} />
            <Stack.Screen name="HeadphoneScreen" component={HeadphoneScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen name="Order" component={OrderScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </GestureHandlerRootView>
  );
}

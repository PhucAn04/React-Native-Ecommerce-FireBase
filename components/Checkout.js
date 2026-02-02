// CheckoutScreen.js
import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { CartContext } from "./CartContext";
import Dockbar from "./Dockbar";

export default function CheckoutScreen({ navigation }) {
  const { cartItems, addOrder } = useContext(CartContext);

  // Tính tổng tiền
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formattedTotal = `$${total.toFixed(2)}`;

  const handleCash = () => {
    if (cartItems.length === 0) {
      Alert.alert(
        "Cart is empty",
        "You have no products in your shopping cart."
      );
      return;
    }
    const newOrder = {
      id: Date.now().toString(),
      items: cartItems,
      total,
      paymentMethod: "Cash on Delivery",
      date: new Date(),
      status: "Pending",
    };
    addOrder(newOrder);
    Alert.alert("Order successful", "You have chosen cash on delivery.");
    navigation.navigate("Order");
  };

  const handleOnline = () => {
    navigation.navigate("OnlinePayment", { total });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Select payment method</Text>
        <Text style={styles.amount}>Total: {formattedTotal}</Text>

        <TouchableOpacity style={styles.button} onPress={handleCash}>
          <Text style={styles.buttonText}>Cart is empty</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleOnline}>
          <Text style={styles.buttonText}>Cash on Delivery</Text>
        </TouchableOpacity>
      </View>

      <Dockbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#333" },
  amount: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 30,
    color: "#D88129",
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "600" },
});

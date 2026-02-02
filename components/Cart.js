import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import Dockbar from "./Dockbar";
import { CartContext } from "./CartContext";

export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total =
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) +
    (cartItems.length ? 2 : 0); // phí ship giả định

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={{ flex: 1 }}>{item.name}</Text>
      <TouchableOpacity
        onPress={() => removeFromCart(item.id)}
        style={styles.trash}
      >
        <Image
          source={require("./Icon/trash.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.backButton}
        >
          <Image
            source={require("./Icon/arrows.png")}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cart</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.cartInfo}>
          You have {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}{" "}
          left in your cart
        </Text>

        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 160 }}
          />
        ) : (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Your cart is empty.
          </Text>
        )}
      </View>

      {cartItems.length > 0 && (
        <View style={styles.checkoutWrapper}>
          <Text style={styles.total}>TOTAL: ${total.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.checkoutBtn}
            onPress={() => navigation.navigate("Checkout", { total })}
          >
            <Text style={styles.checkoutText}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      )}

      <Dockbar navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "white" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: "rgb(216, 129, 41)",
  },
  content: { flex: 1, padding: 20 },
  cartInfo: { textAlign: "center", marginBottom: 10, color: "green" },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  itemImage: { width: 50, height: 50, marginRight: 10 },
  trash: { padding: 10 },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 10,
  },
  checkoutWrapper: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 80,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  checkoutBtn: {
    backgroundColor: "black",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  checkoutText: { color: "white", fontWeight: "bold" },
  backButton: { marginRight: 10 },
  backArrow: { width: 20, height: 20 },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
});

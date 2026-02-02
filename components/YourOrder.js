import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CartContext } from "./CartContext";
import Dockbar from "./Dockbar";

export default function OrderScreen({ navigation }) {
  const { orders } = useContext(CartContext);

  if (orders.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Bạn chưa có đơn hàng nào.</Text>
        </View>
        <Dockbar navigation={navigation} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Your Order</Text>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <Text style={styles.orderId}>Order id: {item.id}</Text>
              <Text>Order date: {item.date.toLocaleString()}</Text>
              <Text>Total: ${item.total.toFixed(2)}</Text>
              <Text>Payment method: {item.paymentMethod}</Text>
              <Text>Status: {item.status}</Text>
              <Text>Products:</Text>
              {item.items.map((product, index) => (
                <Text key={index} style={styles.productItem}>
                  - {product.name} x {product.quantity}
                </Text>
              ))}
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      </View>

      <Dockbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 20, paddingBottom: 30 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  orderItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  orderId: { fontWeight: "bold", marginBottom: 5 },
  productItem: { marginLeft: 10 },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { fontSize: 18, color: "#666" },
});

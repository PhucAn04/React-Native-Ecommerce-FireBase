import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import Dockbar from "./Dockbar";
import ScreenWrapper from "../components/ScreenWrapper";

export default function ProfileScreen({ route, navigation }) {
  const user = route?.params;

  useEffect(() => {
    if (!user) {
      Alert.alert("Error", "User data not found");
      navigation.goBack();
    }
  }, [user]);

  if (!user) return null;

  const { username, email, phone, city, password } = user;

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("./Icon/arrows.png")}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <Image
              source={require("./Picture/LoginPicture.png")}
              style={styles.avatar}
            />
          </View>

          {/* Thông tin */}
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Username</Text>
            <View style={styles.infoBox}>
              <Text style={styles.value}>{username}</Text>
            </View>

            <Text style={styles.label}>Email</Text>
            <View style={styles.infoBox}>
              <Text style={styles.value}>{email}</Text>
            </View>

            <Text style={styles.label}>Phone</Text>
            <View style={styles.infoBox}>
              <Text style={styles.value}>{phone}</Text>
            </View>

            <Text style={styles.label}>City</Text>
            <View style={styles.infoBox}>
              <Text style={styles.value}>{city}</Text>
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.infoBox}>
              <Text style={styles.value}>{password}</Text>
            </View>
          </View>

          {/* Nút Edit Profile */}
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate("EditProfile", user)}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </ScrollView>

        <Dockbar navigation={navigation} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#FFA89D",
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
    marginTop: 12,
  },
  infoBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  value: {
    fontSize: 16,
  },
  editButton: {
    backgroundColor: "#000",
    margin: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';
import Dockbar from './Dockbar';

export default function HistoryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="rgb(216, 129, 41)" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('./Icon/arrows.png')} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>History</Text>
      </View>

      {/* Nội dung chính */}
      <View style={styles.content}>
        <View style={styles.item}>
          <Image source={require('./Picture/iphone15.png')} style={styles.image} />
          <View>
            <Text>Apple iPhone 15 Plus (256 GB) - Pink</Text>
            <Text>Total: $992</Text>
            <Text>Quantity: 1</Text>
          </View>
        </View>
      </View>

      <Dockbar navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(216, 129, 41)',
  },
  backButton: {
    marginRight: 10,
  },
  backArrow: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
});

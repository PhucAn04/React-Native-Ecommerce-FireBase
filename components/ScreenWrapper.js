import React from 'react';
import { View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';

export default function ScreenWrapper({ children, style }) {
  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  container: {
    flex: 1,
     // tuỳ chọn: thêm lề ngang nếu muốn
  },
});

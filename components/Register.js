import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ScreenWrapper from '../components/ScreenWrapper';

import { auth, db } from '../firebase-config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import Icon from 'react-native-vector-icons/Feather';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    city: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true); // State quản lý ẩn/hiện mật khẩu

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSignUp = async () => {
    const { email, password, username, city, phone } = form;

    if (!email || !password || !username) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ Email, Tên và Mật khẩu');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Lỗi', 'Mật khẩu phải có ít nhất 6 ký tự');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: username,
      });

      await setDoc(doc(db, 'users', userCredential.user.uid), {
        username,
        email,
        password,
        city,
        phone,
        createdAt: new Date(),
      });

      Alert.alert('Thành công', 'Tài khoản đã được tạo thành công!');
      navigation.navigate('Login');
    } catch (error) {
      let errorMessage = 'Đăng ký thất bại. Vui lòng thử lại';

      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email đã được sử dụng';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Email không hợp lệ';
          break;
        case 'auth/weak-password':
          errorMessage = 'Mật khẩu quá yếu (tối thiểu 6 ký tự)';
          break;
      }

      Alert.alert('Lỗi', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            {/* Nút quay lại */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Image
                source={require('./Icon/arrows.png')} // <- Thay icon mũi tên tại đây
                style={styles.backIcon}
              />
            </TouchableOpacity>

            <Image
              source={require('./Picture/LoginPicture.png')}
              style={styles.avatar}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={form.email}
              onChangeText={(value) => handleChange('email', value)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TextInput
              style={styles.input}
              placeholder="Tên người dùng"
              value={form.username}
              onChangeText={(value) => handleChange('username', value)}
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Mật khẩu"
                secureTextEntry={secure}
                value={form.password}
                onChangeText={(value) => handleChange('password', value)}
              />
              <TouchableOpacity onPress={() => setSecure(!secure)} style={styles.eyeIcon}>
                <Icon name={secure ? 'eye-off' : 'eye'} size={24} color="gray" />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Thành phố"
              value={form.city}
              onChangeText={(value) => handleChange('city', value)}
            />

            <TextInput
              style={styles.input}
              placeholder="Số điện thoại"
              value={form.phone}
              onChangeText={(value) => handleChange('phone', value)}
              keyboardType="phone-pad"
            />

            <TouchableOpacity
              style={[styles.signupButton, loading && { opacity: 0.7 }]}
              onPress={handleSignUp}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.signupText}>Đăng ký</Text>
              )}
            </TouchableOpacity>

            <Text style={styles.loginText}>
              Đã có tài khoản?{' '}
              <Text
                style={styles.loginLink}
                onPress={() => navigation.navigate('Login')}
              >
                Đăng nhập ngay
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
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20, // điều chỉnh tùy theo iOS/Android
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  avatar: { 
    width: 200, 
    height: 200, 
    borderRadius: 40, 
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
  },
  eyeIcon: {
    paddingLeft: 10,
  },
  signupButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginTop: 5,
  },
  signupText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#fff',
  },
  loginText: { 
    marginTop: 20, 
    fontSize: 14, 
    color: '#333',
  },
  loginLink: { 
    color: 'red', 
    fontWeight: 'bold',
  },
});

export default RegisterScreen;

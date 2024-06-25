import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon từ thư viện
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Kiểm tra tên đăng nhập và mật khẩu
    if (username === 'admin' && password === '123456') {
      // Đăng nhập thành công, chuyển hướng tới trang chủ hoặc thực hiện hành động phù hợp
      Alert.alert('Login successful', 'Welcome to the home screen!');
      //navigation.navigate('Home');
    } else {
      // Đăng nhập không thành công, thông báo lỗi
      Alert.alert('Login failed', 'Invalid username or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('/home/nguyen/android_project/Elsa_App/Logo/Logo_IoTVisionc_Final_01.png')} style={styles.logo} />  
      
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 30,
    paddingVertical: 0,
    color:'black',
  },
  logo:{
    width: 300, //điêu chỉnh kích thước logo tùy theo yêu cầu
    height: 70,
    marginBottom: 8,
    paddingTop: 10,
    paddingBottom: 5,

  },
});



import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert,Image, TouchableOpacity ,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon từ thư viện
import { useNavigation,NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import CheckBox from '@react-native-community/checkbox';


export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false); // State để nhớ mật khẩu
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); //

  const handleLogin = () => {
    // Kiểm tra tên đăng nhập và mật khẩu
    if (username === 'admin' && password === '123456') {
      // Đăng nhập thành công, chuyển hướng tới trang chủ hoặc thực hiện hành động phù hợp
      Alert.alert('Login successful', 'Welcome to the home screen!');
      navigation.navigate('Home'); // Điều hướng đến màn hình Home
    } else {
      // Đăng nhập không thành công, thông báo lỗi
      Alert.alert('Login failed', 'Invalid username or password. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    // Xử lý khi người dùng nhấn vào liên kết quên mật khẩu
    Alert.alert('Forgot Password', 'Navigate to Forgot Password screen.');
    // Thực hiện điều hướng đến màn hình quên mật khẩu nếu có
    // navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Image source={require('/home/nguyen/android_project/Elsa_App/assets/image/Logo_IoTVisionc_Final_01.png')} style={styles.logo} />  
       
      <Text style={styles.bycty}>Cty TNHH Công nghệ và phát triển IoT 3DVisionLab</Text>
      {/* design textinput tederang nhap */}
      <View style={styles.inputContainer}>
      <Icon name="user" size={25} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={text => setUsername(text)}
          placeholderTextColor="#aaa"
        />
      </View>

      {/* // design textinput mat khau */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={25} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          placeholderTextColor="#aaa"
        />
      </View>

      {/* // design nho mat khau */}
      <View style={styles.rememberContainer}>
        <CheckBox
          value={rememberPassword}
          onValueChange={setRememberPassword}
          style={styles.checkbox}
        />
        <Text style={styles.rememberText}>Nhớ mật khẩu</Text>
      </View>

      {/* // design quen mat khau */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Quên mật khẩu ?</Text>
      </TouchableOpacity>

      {/* // button login */}
      <View style={styles.buttoncontainer}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Thay đổi để căn chỉnh từ đầu màn hình
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50, // Thêm khoảng cách từ đầu màn hình xuống
  },
  bycty:{
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20, // Khoảng cách dòng
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
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
    marginBottom: 20,
    paddingTop: 2,
    paddingBottom: 5,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#ccc',
  },
  rememberText: {
    color: 'black',
    paddingBottom: 1,
    marginRight: 10
  },
  forgotPassword: {
    marginTop: 10,
    color: 'black',
    textDecorationLine: 'underline',
    paddingBottom: 10,
  },
  checkbox:{
    width: 30,
    height: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,    
  },
  button: {
    backgroundColor: '#1E90FF', // Màu nền của nút
    padding: 20, // Khoảng cách bên trong
    borderRadius: 8, // Bo góc
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    flex: 1,
    marginHorizontal: 100, // Khoảng cách hai bên của nút
  },
  buttonText: {
    color: 'white', // Màu chữ
    fontSize: 14, // Kích thước chữ
    fontWeight: 'bold', // Độ đậm chữ
  },
  buttoncontainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});
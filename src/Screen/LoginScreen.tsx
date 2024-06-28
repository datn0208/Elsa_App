import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Image, TouchableOpacity, Animated ,Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon từ thư viện
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import CheckBox from '@react-native-community/checkbox';

type FadeInViewProps = {
  children: React.ReactNode;
};

const FadeInView: React.FC<FadeInViewProps> = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust animation duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {children}
    </Animated.View>
  );
};

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false); // State để nhớ mật khẩu
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleDangnhap = () => {
    // Kiểm tra tên đăng nhập và mật khẩu
    if (username === 'admin' && password === '123456') {
      // Đăng nhập thành công, chuyển hướng tới trang chủ hoặc thực hiện hành động phù hợp
      Alert.alert(
        'Login successful',
        'Đăng nhập thành công!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home'),
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
    } else {
      // Đăng nhập không thành công, thông báo lỗi
      Alert.alert(
        'Login failed',
        'Username hoặc password không hợp lệ. Vui lòng thử lại.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  };

  const handleQuenmatkhau = () => {
    // Xử lý khi người dùng nhấn vào liên kết quên mật khẩu
    Alert.alert('Forgot Password', 'Navigate to Forgot Password screen.');
    // Thực hiện điều hướng đến màn hình quên mật khẩu nếu có
    // navigation.navigate('ForgotPassword');
  };
  const handleGoogle = () => {
    // Xử lý khi người dùng nhấn vào liên kết quên mật khẩu
    Alert.alert('Forgot Password', 'Navigate to Forgot Password screen.');
    // Thực hiện điều hướng đến màn hình quên mật khẩu nếu có
    // navigation.navigate('ForgotPassword');
  };
  const handleDangky = () => {
    // Xử lý khi người dùng nhấn vào liên kết quên mật khẩu
    Alert.alert('Forgot Password', 'Navigate to Forgot Password screen.');
    // Thực hiện điều hướng đến màn hình quên mật khẩu nếu có
    // navigation.navigate('ForgotPassword');
  };
  const handleFacebookPress = () => {
    // Xử lý khi nhấn vào Facebook
    Linking.openURL('https://www.facebook.com').catch(err =>
      console.error('Error opening Facebook URL: ', err)
    );
  };

  const handleLinkedInPress = () => {
    // Xử lý khi nhấn vào LinkedIn
    Linking.openURL('https://www.linkedin.com').catch(err =>
      console.error('Error opening LinkedIn URL: ', err)
    );
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
      <View style={styles.rememberAndForgotContainer}>
        <View style={styles.rememberContainer}>
          <View style={styles.outerContainer}>
            <CheckBox
              value={rememberPassword}
              onValueChange={setRememberPassword}
              style={styles.checkbox}
            />
          </View>
          <Text style={styles.rememberText}>Nhớ mật khẩu</Text>
        </View>
      {/* // design quen mat khau */}
        <TouchableOpacity onPress={handleQuenmatkhau}>
          <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>

      {/* // design dang ky */}
      <TouchableOpacity onPress={handleDangky}>
        <Text style={styles.forgotPassword}>Đăng ký</Text>
      </TouchableOpacity>

      {/* // button dang nhap */}
      <TouchableOpacity style={styles.buttonLogin} onPress={handleDangnhap}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      {/* // button login google */}
      <TouchableOpacity style={styles.buttonGoogle} onPress={handleGoogle}>
        <Text style={styles.buttonText}>Đăng nhập bằng Google</Text>
      </TouchableOpacity>
      {/* // design icon lien ket voi chung toi */}
      <View style={styles.bottomContainer}>

        <Text style={styles.linkText}>Liên kết với chúng tôi</Text>
          
        <TouchableOpacity style={styles.iconContainer} onPress={handleFacebookPress}>
          <Icon name="facebook-square" size={30} color="#4267B2" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={handleLinkedInPress}>
          <Icon name="linkedin-square" size={30} color="#0077B5" />
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: 'row', // Thêm thuộc tính để căn chỉnh theo chiều ngang
    borderColor: '#c0c0c0', // Đổi màu đường viền thành màu đỏ (ví dụ)
  },
  
  checkbox: {
    alignSelf: 'center'
    
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Thay đổi để căn chỉnh từ đầu màn hình
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 18, // Thêm khoảng cách từ đầu màn hình xuống
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
    alignSelf: 'center', // Căn giữa theo chiều ngang
  },
   rememberAndForgotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    
  },
  rememberText: {
    color: 'black',
    paddingBottom: 1,
    marginLeft: 5, // Khoảng cách giữa checkbox và chữ
    fontFamily: 'Time New Roman',
  },
  forgotPassword: {
    alignSelf: 'center', // Align text in the center horizontally
    marginTop: 5,
    color: 'black',
    paddingBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'Time New Roman',
    textDecorationLine: 'underline',
  },

  buttonLogin: {
    backgroundColor: '#1E90FF', // Màu nền của nút
    padding: 5, // Khoảng cách bên trong
    borderRadius: 5, // Bo góc
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    width:'100%',
    shadowColor: '#000', // Màu đổ bóng
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5, // Độ nổi của bóng đổ (elevation)
  },
   buttonGoogle: {
    backgroundColor: '#ff7f50', // Màu nền của nút
    padding: 5, // Khoảng cách bên trong
    borderRadius: 5, // Bo góc
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    width:'100%',
    shadowColor: '#000', // Màu đổ bóng
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5, // Độ nổi của bóng đổ (elevation)
    marginTop: 10,
   },
  buttonText: {
    color: 'white', // Màu chữ
    fontSize: 16, // Kích thước chữ
    fontWeight: 'bold', // Độ đậm chữ
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 8, // Khoảng cách từ dưới lên
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginLeft: 75, // Thêm marginLeft để di chuyển sang phải
    
  },
  iconContainer: {
    marginHorizontal: 5,
    
  },
  linkText: {
    color: 'gray',
    fontSize: 14,
    fontFamily: 'Arial',
    
  },
});

export default LoginScreen;

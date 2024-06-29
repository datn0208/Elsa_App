import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Image, TouchableOpacity, Animated ,Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon từ thư viện
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import firebase from '@react-native-firebase/app';

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
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false); // State để nhớ mật khẩu
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useEffect(() => {
  GoogleSignin.configure({
    webClientId: '1079369918873-sehja51vgbf0qetcmfq9arj8clqprff4.apps.googleusercontent.com', // Thay YOUR_WEB_CLIENT_ID bằng Client ID của bạn từ Google Developer Console
  });
}, []);

  // Load "Nhớ mật khẩu" từ AsyncStorage khi màn hình LoginScreen được hiển thị
  useEffect(() => {
    const loadRememberPassword = async () => {
      try {
        const remember = await AsyncStorage.getItem('rememberPassword');
        if (remember !== null) {
          setRememberPassword(JSON.parse(remember));
        }
      } catch (error) {
        console.error('Error loading remember password:', error);
      }
    };
    loadRememberPassword();
  }, []);

  // Lưu giá trị "Nhớ mật khẩu" vào AsyncStorage khi người dùng thay đổi checkbox
  useEffect(() => {
    const saveRememberPassword = async () => {
      try {
        await AsyncStorage.setItem('rememberPassword', JSON.stringify(rememberPassword));
      } catch (error) {
        console.error('Error saving remember password:', error);
      }
    };
    saveRememberPassword();
  }, [rememberPassword]);

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
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);

      // Đăng nhập vào Firebase với credential của Google
      await auth().signInWithCredential(googleCredential);
      // Đăng nhập thành công, chuyển hướng tới màn hình Home
      navigation.navigate('Home');
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // Người dùng huỷ đăng nhập
        console.log('Google login cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Đang xử lý đăng nhập
        console.log('Google login in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Google Play Services không khả dụng
        console.log('Google Play Services not available');
      } else {
        // Xử lý lỗi đăng nhập Google khác
        console.error('Google login error:', error.message);
      }
    }
  };
  const handleDangky = () => {
    // Xử lý khi người dùng nhấn vào liên kết quên mật khẩu
    Alert.alert('Register', 'Navigate to Forgot Password screen.');
    // Thực hiện điều hướng đến màn hình quên mật khẩu nếu có
    // navigation.navigate('Register');
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
      <View style={styles.containerLoginGoogle}>
        <GoogleSigninButton
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={handleGoogleLogin}
          disabled={false}
        />
      </View>
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
  containerLoginGoogle:{
    alignItems: 'center',
    paddingTop: 5,
    
  },
  googleButton: {
    width: 350,
    height: 55,    
    alignItems: 'center',
    
    shadowColor: '#000', // Màu đổ bóng
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5, // Độ nổi của bóng đổ (elevation)
  },
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
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 18, // Thêm khoảng cách từ đầu màn hình xuống
  },
  bycty:{
    color: 'gray',
    marginBottom: 20,
    lineHeight: 20, // Khoảng cách dòng
    textAlign: 'center',
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
    borderRadius: 5, // Bo góc
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    width: 350,
    height: 50, 
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

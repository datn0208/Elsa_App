// Author: NGUYEN DINH DAT
// Date: 24/6/2024
////////// APP ANDROID //////////

// In App.js in a new project
import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screen/LoginScreen'; 
import HomeScreen from './src/Screen/HomeScreen'; 
import ChartsScreen from './src/Screen/ChartsScreen';
import OtherScreen2 from './src/Screen/OtherScreen2';
import ProfileScreen from './src/Screen/ProfileScreen';
import SettingsScreen from './src/Screen/SettingsScreen';

// định nghĩa các tham số màn hình cho StackNavigator
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Charts: undefined;
  OtherScreen2: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          // Chỉnh sửa header loginscreen
            options={{
              title: 'Đăng Nhập',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 18, // Điều chỉnh kích thước chữ
                fontWeight: 'bold', // Điều chỉnh độ đậm của chữ
                fontFamily: 'Arial-custom-font',
                // Nếu cần thiết, bạn có thể thêm các thuộc tính khác như fontFamily, color, ...
              },
            }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
                title: 'Home',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 16, // Điều chỉnh kích thước chữ
                  fontWeight: 'bold', // Điều chỉnh độ đậm của chữ
                  fontFamily: 'Arial-custom-font',
                  // Nếu cần thiết, bạn có thể thêm các thuộc tính khác như fontFamily, color, ...
                },
          }}
        />
        <Stack.Screen
          name="Charts" 
          component={ChartsScreen} 
          options={{
                title: 'Charts',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 16, // Điều chỉnh kích thước chữ
                  fontWeight: 'bold', // Điều chỉnh độ đậm của chữ
                  fontFamily: 'Arial-custom-font',
                  // Nếu cần thiết, bạn có thể thêm các thuộc tính khác như fontFamily, color, ...
                },
          }}
        />
        <Stack.Screen 
          name="OtherScreen2" 
          component={OtherScreen2} 
          options={{
                title: 'OtherScreen2',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 16, // Điều chỉnh kích thước chữ
                  fontWeight: 'bold', // Điều chỉnh độ đậm của chữ
                  fontFamily: 'Arial-custom-font',
                  // Nếu cần thiết, bạn có thể thêm các thuộc tính khác như fontFamily, color, ...
                },
          }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
                title: 'Profile',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 16, // Điều chỉnh kích thước chữ
                  fontWeight: 'bold', // Điều chỉnh độ đậm của chữ
                  fontFamily: 'Arial-custom-font',
                  // Nếu cần thiết, bạn có thể thêm các thuộc tính khác như fontFamily, color, ...
                },
          }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
                title: 'Settings',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 16, // Điều chỉnh kích thước chữ
                  fontWeight: 'bold', // Điều chỉnh độ đậm của chữ
                  fontFamily: 'Arial-custom-font',
                  // Nếu cần thiết, bạn có thể thêm các thuộc tính khác như fontFamily, color, ...
                },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
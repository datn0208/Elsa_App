// Author: NGUYEN DINH DAT
// Date: 24/6/2024
////////// APP ANDROID //////////

// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screen/LoginScreen'; // Adjust the path if necessary
import HomeScreen from './src/Screen/HomeScreen'; 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;












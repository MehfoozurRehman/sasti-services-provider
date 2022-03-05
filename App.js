import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Auth from './src/screens/Auth';
import ForgotPassword from './src/screens/ForgotPassword';
import ChangePassword from './src/screens/ChangePassword';
import UploadPicture from './src/screens/UploadPicture';
import Location from './src/screens/Location';

const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Auth}
          initialParams={{isOnScreen: 'login'}}
        />
        <Stack.Screen
          name="SignUp"
          component={Auth}
          initialParams={{isOnScreen: 'signup'}}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="UploadPicture" component={UploadPicture} />
        <Stack.Screen name="Location" component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

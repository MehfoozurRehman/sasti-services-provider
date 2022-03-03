import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Login from './Login';
import SignUp from './SignUp';

export default function Auth({route, navigation}) {
  const {isOnScreen} = route.params;
  const [isOn, setIsOn] = useState(isOnScreen);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2FBF8'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setIsOn('login');
            }}
            style={{
              borderBottomColor: '#242424',
              borderBottomWidth: isOn === 'login' ? 2 : 0,
              marginRight: 10,
            }}>
            <Text
              style={{
                color: '#242424',
                fontSize: 18,
                fontWeight: isOn === 'login' ? 'bold' : '400',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsOn('signup');
            }}
            style={{
              borderBottomColor: '#242424',
              borderBottomWidth: isOn === 'signup' ? 2 : 0,
            }}>
            <Text
              style={{
                color: '#242424',
                fontSize: 18,
                fontWeight: isOn === 'signup' ? 'bold' : '400',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: '#38BA6E', fontSize: 20, fontWeight: 'bold'}}>
          SASTI <Text style={{color: '#FCCA25'}}>SERVICES</Text>
        </Text>
      </View>
      {isOn === 'login' ? (
        <Login navigation={navigation} setIsOn={setIsOn} />
      ) : (
        <SignUp navigation={navigation} setIsOn={setIsOn} />
      )}
    </SafeAreaView>
  );
}

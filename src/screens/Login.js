import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import InputBox from '../components/InputBox';

export default function Login({setIsOn, navigation}) {
  return (
    <ScrollView style={{padding: 20, flex: 1}}>
      <Text style={{color: '#242424', fontSize: 25, marginTop: 50}}>
        Welcome back,
      </Text>
      <Text
        style={{
          color: '#242424',
          fontSize: 25,
          fontWeight: 'bold',
          marginTop: -5,
          marginBottom: 50,
        }}>
        Hammad
      </Text>
      <InputBox placeholder="Email Address" />
      <InputBox placeholder="Password" secure={true} />
      <TouchableOpacity
        style={{marginLeft: 'auto', marginBottom: 100}}
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}>
        <Text
          style={{
            color: '#242424',
            textDecorationColor: '#242424',
            textDecorationLine: 'underline',
          }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#38BA6E',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          height: 45,
          borderRadius: 10,
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text
          style={{
            color: '#242424',
          }}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => {
            setIsOn('signup');
          }}>
          <Text
            style={{
              color: '#38BA6E',
              textDecorationColor: '#38BA6E',
              textDecorationLine: 'underline',
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

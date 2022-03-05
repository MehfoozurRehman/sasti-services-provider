import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import InputBox from '../components/InputBox';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function SignUp({setIsOn, navigation}) {
  return (
    <ScrollView style={{padding: 20, flex: 1}}>
      <Text style={{color: '#242424', fontSize: 25, marginTop: 50}}>
        <Text style={{fontWeight: 'bold'}}>Hello</Text> there!
      </Text>
      <Text
        style={{
          color: '#242424',
          fontSize: 14,
          marginTop: -5,
          marginBottom: 50,
        }}>
        Enter your in­­formation below to create account
      </Text>
      <InputBox placeholder="Name" />
      <InputBox placeholder="Email Address" />
      <InputBox placeholder="Phone" />
      <InputBox placeholder="Password" secure={true} />
      <InputBox placeholder="Confirm Password" secure={true} />
      <BouncyCheckbox
        size={25}
        fillColor="#258D51"
        unfillColor="#FFFFFF"
        text={
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{color: '#8D8C8C'}}>I agree to </Text>
            <TouchableOpacity>
              <Text style={{color: '#38BA6E', textDecorationLine: 'underline'}}>
                Terms and conditions
              </Text>
            </TouchableOpacity>
            <Text style={{color: '#8D8C8C'}}> & </Text>
            <TouchableOpacity>
              <Text style={{color: '#38BA6E', textDecorationLine: 'underline'}}>
                privacy
              </Text>
            </TouchableOpacity>
          </View>
        }
        iconStyle={{borderColor: '#258D51'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        // onPress={(isChecked: boolean) => {}}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Verification');
        }}
        style={{
          backgroundColor: '#38BA6E',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          height: 45,
          marginTop: 20,
          borderRadius: 10,
        }}>
        <Text style={{color: '#ffffff'}}>Sign up</Text>
      </TouchableOpacity>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text
          style={{
            color: '#242424',
          }}>
          Already have an account?
        </Text>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => {
            setIsOn('login');
          }}>
          <Text
            style={{
              color: '#38BA6E',
              textDecorationColor: '#38BA6E',
              textDecorationLine: 'underline',
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

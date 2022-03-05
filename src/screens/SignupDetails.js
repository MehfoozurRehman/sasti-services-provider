import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import InputBox from '../components/InputBox';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {ChevronLeft} from 'react-native-feather';

export default function SignupDetails({setIsOn, navigation}) {
  return (
    <ScrollView style={{padding: 20, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{marginLeft: -5}}>
          <ChevronLeft
            stroke="#242424"
            fill="#fff"
            width={22}
            height={22}
            strokeWidth={2}
          />
        </TouchableOpacity>
        <Text style={{color: '#38BA6E', fontSize: 20, fontWeight: 'bold'}}>
          SASTI <Text style={{color: '#FCCA25'}}>SERVICES</Text>
        </Text>
      </View>
      <Text
        style={{
          color: '#242424',
          fontSize: 25,
          marginTop: 50,
          marginBottom: 20,
        }}>
        Enter Your <Text style={{fontWeight: 'bold'}}>Details!</Text>
      </Text>
      <InputBox placeholder="Category" />
      <InputBox placeholder="Expertise" />
      <InputBox placeholder="WhatsApp Number" />
      <InputBox placeholder="Contact Number" />
      <InputBox placeholder="Rate/Hour" />
      <InputBox placeholder="Summary" />

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
        <Text style={{color: '#ffffff'}}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

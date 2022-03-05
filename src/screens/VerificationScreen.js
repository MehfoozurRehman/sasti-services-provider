import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import InputVerfication from '../components/InputVerification';
import {Camera, ChevronLeft} from 'react-native-feather';
import InputVerification from '../components/InputVerification';

export default function VerificationScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2FBF8'}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/verificationBg.png')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
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
        <ScrollView style={{padding: 20, flex: 1}}>
          <Text
            style={{
              color: '#242424',
              fontSize: 25,
              fontWeight: 'bold',
              marginTop: -5,
              marginBottom: 30,
              marginTop: 60,
              textAlign: 'center',
            }}>
            Enter Verification Code
          </Text>

          <InputVerification />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity style={{marginRight: 5}}>
              <Text
                style={{
                  color: '#38BA6E',
                  textDecorationColor: '#38BA6E',
                  textDecorationLine: 'underline',
                }}>
                Resend OTP
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: '#0E0E17',
              }}>
              2:00
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UploadPicture');
            }}
            style={{
              backgroundColor: '#38BA6E',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              height: 45,
              borderRadius: 10,
              marginTop: 60,
            }}>
            <Text style={{color: '#ffffff'}}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

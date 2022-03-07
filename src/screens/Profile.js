import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  MapPin,
  ChevronLeft,
  Edit,
  Lock,
  Bell,
  Layers,
  Pocket,
} from 'react-native-feather';
import InputBox from '../components/InputBox';

export default function Profile({route, navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
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
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            paddingHorizontal: 20,
            flex: 1,
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <View>
            <Text
              style={{
                color: '#242424',
                fontSize: 25,
                fontWeight: 'bold',
                marginBottom: 30,
              }}>
              Profile
            </Text>
            <View
              style={{
                backgroundColor: '#FFB743',
                padding: 20,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 30,
              }}>
              <Image
                source={require('../assets/userPic.png')}
                style={{width: 60, height: 60, borderRadius: 50}}
              />
              <View style={{marginHorizontal: 10, flex: 1}}>
                <Text
                  style={{color: '#ffffff', fontWeight: 'bold', fontSize: 15}}>
                  Raima Gulzar
                </Text>
                <Text style={{color: '#ffffff'}}>abc1231234@gmai.com</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProfileEdit');
                }}>
                <Edit stroke="#ffffff" width={22} height={22} strokeWidth={2} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ChangePassword');
              }}
              style={{
                flexDirection: 'row',
                padding: 20,
                backgroundColor: '#EDF5F2',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <Lock stroke="#258D51" width={22} height={22} strokeWidth={2} />
              <Text style={{color: '#606060', marginLeft: 10}}>
                Change password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ChangeLocation');
              }}
              style={{
                flexDirection: 'row',
                padding: 20,
                backgroundColor: '#EDF5F2',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <MapPin stroke="#258D51" width={22} height={22} strokeWidth={2} />
              <Text style={{color: '#606060', marginLeft: 10}}>
                Change location
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PrivacyPolicy');
              }}
              style={{
                flexDirection: 'row',
                padding: 20,
                backgroundColor: '#EDF5F2',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <Pocket stroke="#258D51" width={22} height={22} strokeWidth={2} />
              <Text style={{color: '#606060', marginLeft: 10}}>
                PrivacyPolicy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Notifications');
              }}
              style={{
                flexDirection: 'row',
                padding: 20,
                backgroundColor: '#EDF5F2',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <Bell stroke="#258D51" width={22} height={22} strokeWidth={2} />
              <Text style={{color: '#606060', marginLeft: 10}}>
                Notifications
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TermsAndConditions');
              }}
              style={{
                flexDirection: 'row',
                padding: 20,
                backgroundColor: '#EDF5F2',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <Layers stroke="#258D51" width={22} height={22} strokeWidth={2} />
              <Text style={{color: '#606060', marginLeft: 10}}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={{
              backgroundColor: '#38BA6E',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              height: 45,
              borderRadius: 10,
              marginTop: 70,
            }}>
            <Text style={{color: '#ffffff'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

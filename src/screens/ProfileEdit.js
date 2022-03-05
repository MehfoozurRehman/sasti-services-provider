import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Camera, ChevronLeft, Image as ImageIcon} from 'react-native-feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import InputBox from '../components/InputBox';

export default function ProfileEdit({route, navigation}) {
  const [upload, setUpload] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2FBF8'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
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
            flex: 1,
            height: Dimensions.get('window').height - 110,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          }}
          source={require('../assets/uploadPictureBg.png')}>
          <View>
            <Text
              style={{
                color: '#242424',
                fontSize: 25,
                fontWeight: 'bold',
                marginTop: -5,
                marginBottom: 30,
                marginTop: 0,
                textAlign: 'center',
              }}>
              Edit Profile
            </Text>
            <View style={{alignItems: 'center', marginBottom: 30}}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  position: 'relative',
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../assets/userPic.png')}
                />
                <TouchableOpacity
                  onPress={() => {
                    setUpload(true);
                  }}
                  disabled={upload}
                  style={{
                    position: 'absolute',
                    backgroundColor: '#38BA6E',
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bottom: 0,
                    right: 0,
                  }}>
                  <Camera
                    stroke="#ffffff"
                    width={18}
                    height={18}
                    strokeWidth={1.5}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <InputBox placeholder="Name" />
            <InputBox placeholder="Email" />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}
            style={{
              backgroundColor: '#38BA6E',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              height: 45,
              borderRadius: 10,
            }}>
            <Text style={{color: '#ffffff'}}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {upload ? (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '100%',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setUpload(false);
            }}
            style={{
              backgroundColor: 'rgba(255,255,255,.5)',
              flex: 1,
            }}
          />
          <View
            style={{
              backgroundColor: '#38BA6E',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 20,
              elevation: 10,
            }}>
            <TouchableOpacity
              onPress={async () => {
                setUpload(false);
                await launchCamera({
                  cameraType: 'back',
                  includeBase64: true,
                });
              }}
              style={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#ffffff',
                marginRight: 10,
                backgroundColor: '#ffffff',
              }}>
              <Camera stroke="#38BA6E" width={22} height={22} strokeWidth={2} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                setUpload(false);
                await launchImageLibrary({
                  mediaType: 'photo',
                  includeBase64: true,
                });
              }}
              style={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#ffffff',

                backgroundColor: '#ffffff',
              }}>
              <ImageIcon
                stroke="#38BA6E"
                width={22}
                height={22}
                strokeWidth={2}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

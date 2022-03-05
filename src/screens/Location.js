import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {ChevronLeft, MapPin} from 'react-native-feather';

const MapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];
export default function Location({navigation}) {
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
            navigation.navigate('UploadPicture');
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
      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{
            color: '#242424',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: -5,
            marginTop: 20,
          }}>
          Select Your Location
        </Text>
        <Text
          style={{
            color: '#242424',
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 30,
          }}>
          This Will Help With Knowing You Better
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          overflow: 'hidden',
          elevation: 5,
          position: 'relative',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            backgroundColor: '#38BA6E',
            top: 30,
            width: 50,
            height: 50,
            right: 30,
            borderRadius: 50,
            zIndex: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MapPin stroke="#ffffff" width={18} height={18} strokeWidth={1.5} />
        </TouchableOpacity>
        <MapView
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapStyle}
          style={{flex: 1}}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            paddingHorizontal: 20,
            marginBottom: 30,
            bottom: 0,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
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
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

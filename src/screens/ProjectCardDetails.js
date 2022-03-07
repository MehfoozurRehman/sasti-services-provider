import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {MapPin, ChevronLeft, Edit, Lock} from 'react-native-feather';
import Svg, {Defs, LinearGradient, Stop, G, Path} from 'react-native-svg';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

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

export default function ProjectCardDetails({route, navigation}) {
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
            navigation.navigate('Home');
          }}
          style={{
            width: 45,
            height: 45,
            display: 'flex',
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
          }}>
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
      <View
        style={{
          paddingHorizontal: 20,
          flex: 1,
          justifyContent: 'space-between',
          marginBottom: 30,
        }}>
        <View>
          <View
            style={{
              backgroundColor: '#FFB743',
              padding: 14,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 3,
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={85.448}
                  height={14.117}
                  viewBox="0 0 85.448 14.117">
                  <Defs>
                    <LinearGradient
                      id="a"
                      x1={0.5}
                      x2={0.5}
                      y2={1}
                      gradientUnits="objectBoundingBox">
                      <Stop offset={0} stopColor="#fff" />
                      <Stop offset={1} stopColor="#f2fbf8" />
                    </LinearGradient>
                  </Defs>
                  <Path
                    data-name="Icon ionic-ios-star"
                    d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                    transform="translate(-2.25 -3.375)"
                    fill="url(#a)"
                  />
                  <Path
                    data-name="Icon ionic-ios-star"
                    d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                    transform="translate(15.513 -3.375)"
                    fill="url(#a)"
                  />
                  <Path
                    data-name="Icon ionic-ios-star"
                    d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                    transform="translate(33.276 -3.375)"
                    fill="url(#a)"
                  />
                  <Path
                    data-name="Icon ionic-ios-star"
                    d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                    transform="translate(51.039 -3.375)"
                    fill="url(#a)"
                  />
                  <Path
                    data-name="Icon ionic-ios-star"
                    d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                    transform="translate(67.995 -3.375)"
                    fill="#eb950c"
                  />
                </Svg>
                <Text style={{fontSize: 12, color: '#ffffff', marginLeft: 8}}>
                  5.0
                </Text>
              </View>
            </View>
          </View>
        </View>

        <MapView
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapStyle}
          style={{
            flex: 1,
            backgroundColor: '#242424',
            maxHeight: 270,
            marginBottom: 'auto',
            borderRadius: 14,
          }}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
        <ScrollView style={{flex: 1, marginTop: 20}}>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View
                style={{
                  width: '49%',
                  height: 90,
                  backgroundColor: '#FFC625',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#ffffff',
                    textAlign: 'center',
                  }}>
                  7 March
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#ffffff',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}>
                  Date
                </Text>
              </View>
              <View
                style={{
                  width: '49%',
                  height: 90,
                  backgroundColor: '#38BA6E',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#ffffff',
                    textAlign: 'center',
                  }}>
                  6 PM - 8 PM
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#ffffff',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}>
                  Time
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 20,
                backgroundColor: '#ffffff',
                borderRadius: 12,
                marginTop: 20,
              }}>
              <Text style={{fontSize: 16, color: '#242424', fontWeight: '700'}}>
                Services
              </Text>
              <Text style={{fontSize: 14, color: '#242424'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti expedita cumque iste voluptatem culpa dicta asperiores
                est labore, saepe ducimus aut voluptatibus dolore.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

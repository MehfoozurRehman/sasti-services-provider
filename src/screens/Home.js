import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {MapPin} from 'react-native-feather';
import Svg, {G, Path} from 'react-native-svg';

function ProjectCard() {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
      }}>
      <View
        style={{
          width: 65,
          height: 65,
          padding: 4,
          backgroundColor: '#ffffff',
          borderRadius: 65,
          marginTop: -50,
        }}>
        <Image
          style={{width: '100%', height: '100%', borderRadius: 65}}
          source={require('../assets/userPic.png')}
        />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 14,
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 16,
              color: '#212121',
              fontWeight: '700',
              marginBottom: 4,
            }}>
            Mehfooz Ali
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={85.448}
              height={14.117}
              viewBox="0 0 85.448 14.117">
              <G data-name="Group 3036" fill="#ffb743">
                <Path
                  data-name="Icon ionic-ios-star"
                  d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                  transform="translate(-293.055 -361) translate(290.805 357.625)"
                />
                <Path
                  data-name="Icon ionic-ios-star"
                  d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                  transform="translate(-293.055 -361) translate(308.567 357.625)"
                />
                <Path
                  data-name="Icon ionic-ios-star"
                  d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                  transform="translate(-293.055 -361) translate(326.331 357.625)"
                />
                <Path
                  data-name="Icon ionic-ios-star"
                  d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                  transform="translate(-293.055 -361) translate(344.094 357.625)"
                />
                <Path
                  data-name="Icon ionic-ios-star"
                  d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                  transform="translate(-293.055 -361) translate(361.05 357.625)"
                />
              </G>
            </Svg>
            <Text style={{fontSize: 12, color: '#959595', marginLeft: 8}}>
              5.0
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={{fontSize: 13, color: '#212121'}}>Time</Text>
          <Text style={{fontSize: 13, color: '#212121'}}>Date</Text>
          <Text style={{fontSize: 13, color: '#212121'}}>Address</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <TouchableOpacity
          style={{
            width: '49%',
            height: 45,
            backgroundColor: '#FFB743',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, color: '#ffffff'}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '49%',
            height: 45,
            backgroundColor: '#38BA6E',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, color: '#ffffff'}}>Reschedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TabBar({title, selected, setSelected}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(title);
      }}
      style={{
        marginHorizontal: 26,
        alignSelf: 'center',
      }}>
      <Text
        style={{
          fontSize: 16,
          color: selected === title ? '#000000' : '#949494',
          fontWeight: '700',
        }}>
        {title}
      </Text>
      {selected === title ? (
        <View
          style={{
            width: '100%',
            height: 1,
            marginTop: 2,
            backgroundColor: '#38BA6E',
          }}></View>
      ) : null}
    </TouchableOpacity>
  );
}

export default function Home({navigation}) {
  const [selected, setSelected] = useState('Ongoing');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2FBF8'}}>
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <View>
            <Text style={{fontSize: 20, color: '#242424', fontWeight: '600'}}>
              Hammad
            </Text>
            <Text style={{fontSize: 11, color: '#949494'}}>
              Friday, 21 Jan 2022
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{width: 40, height: 40}}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('../assets/userPic.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Location');
              }}
              style={{
                width: 45,
                height: 45,
                borderRadius: 12,
                backgroundColor: '#ffffff',
                marginLeft: 12,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MapPin fill="#F7D656" stroke="#ffffff" width={22} height={22} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{flex: 1}}>
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
                height: 130,
                backgroundColor: '#FFC625',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: '700',
                  color: '#ffffff',
                  textAlign: 'center',
                }}>
                5
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#ffffff',
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Current Projects
              </Text>
            </View>
            <View
              style={{
                width: '49%',
                height: 130,
                backgroundColor: '#38BA6E',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: '700',
                  color: '#ffffff',
                  textAlign: 'center',
                }}>
                343$
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#ffffff',
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Worth Projects
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <View
              style={{
                width: '49%',
                height: 130,
                backgroundColor: '#FFC625',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: '700',
                  color: '#ffffff',
                  textAlign: 'center',
                }}>
                5
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#ffffff',
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Current Projects
              </Text>
            </View>
            <View
              style={{
                width: '49%',
                height: 130,
                backgroundColor: '#38BA6E',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: '700',
                  color: '#ffffff',
                  textAlign: 'center',
                }}>
                343$
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#ffffff',
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Worth Projects
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 30,
              marginBottom: 60,
            }}>
            <TabBar
              title="Ongoing"
              selected={selected}
              setSelected={setSelected}
            />
            <TabBar
              title="Previous"
              selected={selected}
              setSelected={setSelected}
            />
          </View>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Eye, EyeOff} from 'react-native-feather';

export default function InputBox({secure, placeholder, error, style}) {
  const [focus, setFocus] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(secure);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        borderBottomColor: focus ? '#38BA6E' : '#989797',
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingVertical: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          top: -12,
          width: '100%',
        }}>
        <Text style={{color: '#38BA6E'}}>{focus ? placeholder : ''}</Text>
        <Text style={{color: 'red'}}>{error}</Text>
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={focus ? '#F2FBF8' : '#8D8C8C'}
        style={{
          padding: 0,
          color: '#242424',
          fontWeight: 'bold',
          flex: 1,
          ...style,
        }}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        secureTextEntry={secureTextEntry}
      />
      {secure ? (
        <TouchableOpacity
          style={{
            width: 40,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            secureTextEntry
              ? setSecureTextEntry(false)
              : setSecureTextEntry(true);
          }}>
          {secureTextEntry ? (
            <EyeOff
              stroke="#242424"
              fill="#fff"
              width={18}
              height={18}
              strokeWidth={1.5}
            />
          ) : (
            <Eye
              stroke="#242424"
              fill="#fff"
              width={18}
              height={18}
              strokeWidth={1.5}
            />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

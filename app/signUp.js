import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Feather, Octicons, AntDesign } from '@expo/vector-icons'
import { router, useRouter } from 'expo-router';
import Loading from '../components/Loading';
import CustomKeyBoardView from '../components/CustomKeyBoardView';

export default function signUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");

  const handleRegister = async () => {
    if (!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current){
      Alert.alert('Sign Up', 'Please Fill all the fields.');
      return;
    }
  }
  
  return (
    <CustomKeyBoardView>
      <StatusBar style="dark" />
      <View className="flex-1 gap-2" style={{padding: hp(4)}}>
        <View className="items-center pb-5">
          <Image style={{height: hp(30), width: wp(100)}} source={require('../assets/images/register.png')} resizeMode='contain'/>
        </View>

        <View className="gap-7">
          <Text style={{fontSize: hp(4)}} className="tracking-wider text-center font-bold">Register</Text>

          <View className="gap-3">
            <View style={{height: hp(8)}} className=" flex-row gap-4 px-4 bg-neutral-300 items-center rounded-xl">
              <Feather name="user" size={hp(2.7)} color="gray" />
              <TextInput 
                onChange={value => usernameRef.current = value}
                style={{fontSize: hp(2)}}
                className="font-semibold text-neutral-800 flex-1"
                placeholder='Username'
                placeholderTextColor={'gray'}
                />
            </View>
            <View style={{height: hp(8)}} className=" flex-row gap-4 px-4 bg-neutral-300 items-center rounded-xl">
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput 
                onChange={value => emailRef.current = value}
                style={{fontSize: hp(2)}}
                className="font-semibold text-neutral-800 flex-1"
                placeholder='@Email Address'
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{height: hp(8)}} className=" flex-row gap-4 px-4 bg-neutral-300 items-center rounded-xl">
              <Octicons name="key" size={hp(2.7)} color="gray" />
              <TextInput 
                onChange={value => passwordRef.current = value}
                style={{fontSize: hp(2)}}
                className="font-semibold text-neutral-800 flex-1"
                placeholder='Password'
                placeholderTextColor={'gray'}
                secureTextEntry
                />
            </View>
            <View style={{height: hp(8)}} className=" flex-row gap-4 px-4 bg-neutral-300 items-center rounded-xl">
              <Feather name="image" size={hp(2.7)} color="gray" />
              <TextInput 
                onChange={value => profileRef.current = value}
                style={{fontSize: hp(2)}}
                className="font-semibold text-neutral-800 flex-1"
                placeholder='Profile Image'
                placeholderTextColor={'gray'}
              />
            </View>
            


            {/* Submit Button */}
            <View>
              <View className="pb-4">
                {
                  loading? (
                    <View className="flex-1 items-center">
                      <Loading size={hp(8)}/>
                    </View>
                  ) : (
                    <TouchableOpacity onPress={handleRegister} className="bg-blue-500 p-4 rounded-xl">
                      <Text style={{fontSize: hp(2.7)}}className="text-center color-white">Sign Up</Text>
                    </TouchableOpacity>

                  )
                }
              </View>

              <View className="flex-row justify-center">
                <Text style={{fontSize: hp(1.8)}} className="font-medium text-neutral-600">Alreadt Have an Account? </Text>
                <Pressable onPress={() => router.replace('signIn')}>
                  <Text style={{fontSize: hp(1.8)}} className="font-semibold  text-blue-500">Sign In</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyBoardView>
  )
}
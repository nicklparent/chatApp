import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons'
import { router, useRouter } from 'expo-router';
import Loading from '../components/Loading';

export default function signIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current){
      Alert.alert('Sign In', 'Please Fill all the fields.');
      return;
    }
  }
  return (
    <View className="flex-1 pt-3">
      <StatusBar style="dark" />
      <View className="flex-1 gap-2" style={{padding: hp(4)}}>
        <View className="items-center pb-5">
          <Image style={{height: hp(35), width: wp(100)}} source={require('../assets/images/signIn.png')} resizeMode='contain'/>
        </View>

        <View className="gap-10">
          <Text style={{fontSize: hp(4)}} className="tracking-wider text-center font-bold">Login</Text>

          <View className="gap-3">
            <View style={{height: hp(8)}} className=" flex-row gap-4 px-4 bg-neutral-300 items-center rounded-xl">
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput 
                onChange={value => emailRef.current = value}
                style={{fontSize: hp(2)}}
                className="font-semibold text-neutral-800"
                placeholder='@Email Address'
                placeholderTextColor={'gray'}
                />
            </View>
            {/* Password and Forgot Password */}
            <View className="gap-4">
              <View style={{height: hp(8)}} className=" flex-row gap-4 px-4 bg-neutral-300 items-center rounded-xl">
                <Octicons name="key" size={hp(2.7)} color="gray" />
                <TextInput 
                  onChange={value => passwordRef.current = value}
                  style={{fontSize: hp(2)}}
                  className="flex-1 font-semibold text-neutral-800"
                  placeholder='Password'
                  placeholderTextColor={'gray'}
                  secureTextEntry
                  />
              </View>
              <Text className="text-neutral-500 font-light text-right">Forgot Password?</Text>
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
                    <TouchableOpacity onPress={handleLogin} className="bg-blue-500 p-4 rounded-xl">
                      <Text style={{fontSize: hp(2.7)}}className="text-center color-white">Sign In</Text>
                    </TouchableOpacity>

                  )
                }
              </View>


              {/* Sign up view */}
              <View className="flex-row justify-center">
                <Text style={{fontSize: hp(1.8)}} className="font-medium text-neutral-600">Dont Have an Account? </Text>
                <Pressable onPress={() => router.replace('signUp')}>
                  <Text style={{fontSize: hp(1.8)}} className="font-semibold  text-blue-500">Sign Up</Text>
                </Pressable>
              </View>

            </View>


          </View>
        </View>
      </View>
    </View>
  )
}
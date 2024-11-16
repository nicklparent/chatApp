import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'


const ios = Platform.OS == 'ios';
export default function CustomKeyBoardView({children}) {
  return (
    <KeyboardAvoidingView
        behavior = {ios ? 'paddding': 'height'}
        style={{flex: 1}}
    >
        <ScrollView
            style={{flex: 1}}
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            {
                children
            }
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
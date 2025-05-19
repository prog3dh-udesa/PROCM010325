import { View, Text } from 'react-native'
import React from 'react'
import { auth } from '../firebase/config'

export default function Feed() {
  return (
    <View>
      <Text>Hola usuario: {auth.currentUser.email}</Text>
    </View>
  )
}
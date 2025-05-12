import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Pagina2 from '../screens/Pagina2'
import Pagina3 from '../screens/Pagina3'
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={Home}
          options={{
            headerShown: false
          }}  
        />
        <Stack.Screen
          name='Pagina2'
          component={Pagina2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Pagina3'
          component={Pagina3}
          options={{
            headerShown: false
          }}
        />
    </Stack.Navigator>
  )
}
import { View, Text, TouchableOpacity } from 'react-native'
import React, {Component} from 'react'
import { auth } from '../firebase/config'
export default class Perfil extends Component {
  constructor(props){
    super(props)
  }
  logout(){
    auth.signOut()
    .then(()=>this.props.navigation.navigate('Register'))
  }
  
  render(){
    return (
      <View>
        <Text>Perfil</Text>
        <TouchableOpacity onPress={()=> this.logout()}>
          <Text>Cerrar sesion</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
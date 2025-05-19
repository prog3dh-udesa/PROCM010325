import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import React, {Component} from 'react'
import { auth, db } from '../firebase/config'

export default class Perfil extends Component {
  constructor(props){
    super(props)
    this.state = {
      usuarios: []
    }
  }

  componentDidMount(){
    db.collection('users').onSnapshot((docs) => {
      let arrDocs = [];
      docs.forEach((doc) => arrDocs.push({
        id: doc.id,
        data: doc.data()
      }))
      this.setState({
        usuarios: arrDocs
      }, () => console.log('este es el state', this.state))
    })
  }

  logout(){
    auth.signOut()
    .then(()=> this.props.navigation.navigate('Register'))
    .catch(err => console.log('err en signout', err))
  }
  
  render(){
    return (
      <View>
        <Text>Perfil</Text>
        <TouchableOpacity onPress={() => this.logout()}>
          <Text>Cerrar Sesion</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
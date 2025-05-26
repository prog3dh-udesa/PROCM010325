import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config'
import firebase from 'firebase'

export default class Usuario extends Component {
    constructor(props){
        super(props)
        this.state = {
            siguiendo: false,
            cantSeguidores: this.props.data.seguidores ? this.props.data.seguidores.length : 0
        }
    }

    componentDidMount(){
        if(this.props.data.seguidores){
            const cantSeguidores = this.props.data.seguidores.length
            const siguiendo = this.props.data.seguidores.includes(auth.currentUser.email)
            
            this.setState({
                cantSeguidores: cantSeguidores,
                siguiendo: siguiendo
            })

        }


    }

    seguirUsuario(){
        db
        .collection('users')
        .doc(this.props.id)
        .update({
            seguidores: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        .then(() => this.setState({
            siguiendo: true,
            cantSeguidores: this.state.cantSeguidores + 1
        }))
    }

    unfollowUsuario(){
        db
        .collection('users')
        .doc(this.props.id)
        .update({
            seguidores: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
        .then(() => this.setState({
            siguiendo: false,
            cantSeguidores: this.state.cantSeguidores - 1
        }))
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.data.owner}</Text>
        <Text>Seguidores: {this.state.cantSeguidores}</Text>
        {
            this.state.siguiendo ?
            <TouchableOpacity
                onPress={() => this.unfollowUsuario()}
            >
                <Text>
                    Dejar de seguir
                </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
                onPress={() => this.seguirUsuario()}
            >
                <Text>
                    Seguir
                </Text>
            </TouchableOpacity>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    }
})
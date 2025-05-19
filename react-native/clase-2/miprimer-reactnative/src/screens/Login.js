import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { auth } from '../firebase/config'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }


    loguearUsuario(email, password){
        auth.signInWithEmailAndPassword(email, password)
        .then((user)=> this.props.navigation.navigate('Tab'))
        .catch((err)=> console.log(err))
    }

    render() {
        return (
        <View>
            <Text>Login</Text>
            <TextInput
                keyboardType='email'
                value={this.state.email}
                onChangeText={(text) => this.setState({email: text})}
                style={styles.input}
            />
            <TextInput
                keyboardType='default'
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
                style={styles.input}
            />
            <TouchableOpacity 
                style={styles.btn}
                onPress={()=> this.loguearUsuario(this.state.email, this.state.password)}
            >
                <Text style={styles.btnTxt}>Ingresa</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'green',
        marginBottom: 8
    },
    btn:{
        backgroundColor: 'blue'
    },
    btnTxt:{
        color:'white'
    }
})
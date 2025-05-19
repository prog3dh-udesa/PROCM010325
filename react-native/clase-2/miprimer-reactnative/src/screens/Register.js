import { 
    Text, 
    View, 
    TextInput, 
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            input1:'',
            input2:'',
            error: false
        }
    }

    registrarUsuario(){
        if(
            this.state.input1 === 'Nelson' &&
            this.state.input2 === '12345'
        ){
            this.props.navigation.navigate('Tab')
        } else {
            this.setState({input1:'', input2: '', error: true})
        }
    }

  render() {
    return (
      <View>
        <Text>Register</Text>
            <TextInput
                style={
                    styles.input
                }
                keyboardType='default'
                value={this.state.input1}
                onChangeText={(texto) => this.setState({input1: texto, error: false }) }
                placeholder='Ingresa tu email'
            />
            <TextInput
                style={
                    styles.input
                }
                keyboardType='default'
                value={this.state.input2}
                onChangeText={(texto) => this.setState({input2: texto, error: false }) }
                placeholder='Ingresa tu password'
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={()=> this.registrarUsuario()}>
                <Text>Registrarme</Text>
            </TouchableOpacity>
            {
                this.state.error ? <Text>Credenciales invalidas</Text> : null
            }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: 'red'
    }
})
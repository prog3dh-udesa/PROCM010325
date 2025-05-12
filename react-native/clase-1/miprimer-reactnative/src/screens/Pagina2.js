import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Pagina2 extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log('props Pagina2', this.props)
    return (
      <View>
        <Text>Pagina2</Text>
      </View>
    )
  }
}
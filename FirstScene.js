import React, { Component} from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

class FirstScene extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <TouchableHighlight onPress={() => {
        const navigator = this.props.navigator
        const routes = this.props.routes
        navigator.push(routes[1])
      }}>
        <View><Text style={{ padding: 100 }}>{ this.props.route.title }</Text></View>
      </TouchableHighlight>
    )
  }
}

export default FirstScene

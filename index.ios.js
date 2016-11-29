import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'
import FirstScene from './FirstScene'
import SecondScene from './SecondScene'

class SimpleNavigator extends Component {
  render() {
    const routes = [
      { title: 'First Scene', index: 0, component: FirstScene },
      { title: 'Second Scene', index: 1, component: SecondScene }
    ]
    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={ (route, navigator) => {
          const Scene = route.component
          return <Scene route={ route } navigator={ navigator } routes={ routes } />
        }}
      />
    )
  }
}

AppRegistry.registerComponent('SimpleNavigation', () => SimpleNavigator);

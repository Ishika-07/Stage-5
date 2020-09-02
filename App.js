import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{createAppContainer, createSwitchNavigator} from 'react-navigation';

import {AppTabNavigator} from './components/AppTabNavigator';
import WelcomeScreen from './screens/welcomeScreen';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator}, 
})
const AppContainer = createAppContainer(switchNavigator)

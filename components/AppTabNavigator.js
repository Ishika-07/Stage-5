import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ExchangeScreen from '../screens/exchangeScreen';
import RequestScreen from '../screens/requestScreeen';

export const AppTabNavigator= createBottomTabNavigator({
    Exchange: {screen: ExchangeScreen, navigationOptions:{tabBarLabel:'Exchange Items'}},
    Request:{screen: RequestScreen, navigationOptions:{tabBarLabel: 'Request Items'}}
}) 
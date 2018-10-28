import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/HomeScreen';
import BudgetScreen from './src/BudgetScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Budget: BudgetScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
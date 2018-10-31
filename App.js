import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/HomeScreen';
import BudgetScreen from './src/BudgetScreen';
import EditBudget from './src/EditBudget';
import AddExpense from './src/AddExpense';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Budget: BudgetScreen,
    EditBudget: EditBudget,
    AddExpense: AddExpense
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
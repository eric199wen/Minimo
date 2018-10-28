import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class BudgetScreen extends Component {
  static navigationOptions = {
    title: 'Budget',
  };
  
  render() {
    return (
      <View style={ styles.container }>
        <Text>This is budget screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9797'
  }
});
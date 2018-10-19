import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Header
          backgroundColor='#D94745' 
          centerComponent={{ text: 'Minimo', style: { color: '#fff', fontSize: 20 } }}
        />
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

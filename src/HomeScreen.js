import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, ListItem, Button } from 'react-native-elements';

import CustomListItem from './CustomListItem';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Minimo',
  };
  
  render() {
    return (
      <View style={ styles.container }>
        <View>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={ <CustomListItem category={ item.title } /> }
                leftIcon={{ name: item.icon }}
              />
            ))
          }
        </View>
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

const list = [
  {
    title: 'Food',
    icon: 'home'
  },
  {
    title: 'House',
    icon: 'home'
  },
  {
    title: 'Transportation',
    icon: 'home'
  }
]
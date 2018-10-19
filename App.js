import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';
import CustomListItem from './src/CustomListItem'

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Header
          backgroundColor='#D94745' 
          centerComponent={{ text: 'Minimo', style: { color: '#fff', fontSize: 20 } }}
        />
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
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Button, List } from 'react-native-elements';

import CustomListItem from './CustomListItem';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Minimo',
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ styles.container }>
        <List>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={ <CustomListItem category={ item.title } /> }
                leftIcon={{ name: item.icon }}
              />
            ))
          }
        </List>
        <Button
          title='Budget'
          onPress={() => navigate('Budget')}
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
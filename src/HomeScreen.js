import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Button, List } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';

import CustomListItem from './CustomListItem';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Minimo',
  };

  constructor(props) {
    super(props);
    this.state = {
      list: [
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
      ],
      isSwipeoutClose: true
    }
  }

  setSwipeoutClose() {
    this.setState({ isSwipeoutClose: true });
  }
  
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={ styles.container }>
        <List>
          {
            this.state.list.map((item, i) => (
              <Swipeout key={i} close={this.state.isSwipeoutClose} right={[
                {
                  text: 'Add',
                  type: 'primary',
                  onPress: () => {
                    this.setSwipeoutClose();
                    navigate('AddExpense', { title: item.title });
                  }
                },
                {
                  text: 'Summary',
                  type: 'secondary'
                }
              ]}>
                <ListItem
                  hideChevron={true}
                  title={ <CustomListItem category={ item.title } /> }
                  leftIcon={{ name: item.icon }}
                />
              </Swipeout>
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

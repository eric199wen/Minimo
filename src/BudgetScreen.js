import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, ListItem } from 'react-native-elements';

export default class BudgetScreen extends Component {
  static navigationOptions = {
    title: 'Budget',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="save"
        color="#fff"
      />
    ),
  };

  constructor(props){
    super(props);
    this.state = {
      input : [
        {
          title: 'Food',
          icon: 'home',
          amount: '$400'
        },
        {
          title: 'House',
          icon: 'home',
          amount: '$1000'
        },
        {
          title: 'Transportation',
          icon: 'home',
          amount: '$100'
        }
      ]
    }
  }

  addTextInput = (key) => {
    console.log('key= '+key);

    let list = this.state.input;
    console.log(list);
    list.push({
      title: 'added title',
      icon: 'home',
      amount: '$1000'
    });
    console.log(list);
    this.setState({ list });
  }

  editAmount = () => {
    console.log('edit amount');
  }
  
  render() {
    return (
      <View style={ styles.container }>
        <Text>Total Amount goes here</Text>
        <View>
          {/* <FormLabel>Name</FormLabel>
          <FormInput
            keyboardType = 'numeric'
            onChangeText={alert('gogo')}
          /> */}
          {
            this.state.input.map((item, i) => (
              <ListItem
                key={i}
                title={ item.title }
                hideChevron={true}
                rightTitle={ item.amount }
                rightTitleStyle={ styles.amount }
                leftIcon={{ name: item.icon }}
                onPress={this.editAmount}
              />
            ))
          }
        </View>
        <Button
          style={ styles.button }
          large
          onPress={() => this.addTextInput(this.state.input.length)}
          title="Add Category"
          color="#fff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9797'
  },
  amount: {
    marginRight: 25,
    color: '#bdc6cf',
    fontSize: 40
  },
  button: {
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  }
});
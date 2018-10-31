import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements'

export default class EditBudget extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'NO TITLE'),
      headerRight: (
        <Button
          onPress={() => navigation.goBack()}
          title="save"
          color="#fff"
        />
      ),
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      amount: this.props.navigation.getParam('amount', '0')
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={{marginBottom: 10}}>
          {this.state.amount}
        </Text>
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
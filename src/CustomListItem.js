import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class CustomListItem extends Component {
  render() {
    return (
      <View style={styles.subtitleView}>
        <Text style={styles.ratingText}>{ this.props.category }</Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})
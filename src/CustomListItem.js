import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { VictoryBar, VictoryStack } from 'victory-native';
import Svg from 'react-native-svg';

export default class CustomListItem extends Component {
  render() {
    return (
      <View style={styles.subtitleView}>
        <Text style={styles.ratingText}>{ this.props.category }</Text>
        <Svg style={{ width: 180 }} >
          <VictoryStack horizontal
            standalone={false}
            style={{ data: { width:100 }, labels: { fontSize: 20 } }}
          >
            <VictoryBar
              data={[{x: "a", y: 0}, {x: "b", y: 3}]}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
            />
            <VictoryBar
              data={[{x: "a", y: 1}, {x: "b", y: 10}]}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
            />
          </VictoryStack>
        </Svg>
      </View>
    );
  }
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row'
  },
  ratingText: {
    color: 'grey',
    width: 95
  }
})
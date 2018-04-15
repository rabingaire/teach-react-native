import React from 'react';
import { View, Text } from 'react-native';

const navigationOptions = {
  title: 'New Page',
};

export default class NewPage extends React.Component {
  static navigationOptions = navigationOptions;

  render() {
    return (
      <View>
        <Text>New Page</Text>
      </View>
    );
  }
}
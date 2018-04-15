import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

export default class Card extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.cardWrapper, this.props.style]}
        onPress={this.props.handleOnCardPress}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    width: width - 20,
    marginTop: 20,
    marginLeft: 10,
    borderRadius:4,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
})
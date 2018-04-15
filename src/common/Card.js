import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default class Card extends React.Component {
  render() {
    return (
      <View style={[styles.cardWrapper, this.props.style]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    height: 50,
    width: width - 20,
    marginTop: 20,
    marginLeft: 10,
    borderRadius:4,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
})
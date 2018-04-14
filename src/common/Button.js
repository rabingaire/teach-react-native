import React from 'react';
import { StyleSheet, Text, TouchableHighlight, } from 'react-native';

export default class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight style={[styles.searchButton, this.props.style]}>
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  searchButton: {
    marginLeft: 10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#68a0cf',
    borderRadius:4,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
})
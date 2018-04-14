import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, } from 'react-native';

import Button from './common/Button';

const { width } = Dimensions.get('window');

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formWrapper}>
          <TextInput style={styles.inputFieldStyle} placeholder='Movie Name'/>
          <Button style={styles.searchButton}>Search</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  formWrapper: {
    flexDirection: 'row',
  },
  inputFieldStyle: {
    height: 40,
    width: width - 90 - 10 - 10 - 10,
    marginLeft: 10,
    borderRadius: 4,
    borderWidth: 1,
    paddingLeft: 5,
    borderColor: '#d6d7da',
  },
  searchButton: {
    width: 90,
  },
})
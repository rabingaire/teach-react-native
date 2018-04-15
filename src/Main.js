import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import axios from 'axios';

import Button from './common/Button';
import Card from './common/Card';

const { width } = Dimensions.get('window');

const APIKEY = 'debf5d591412d6314d598bfc0c895bbb';
const APIURL = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}`;

export default class Main extends React.Component {
  state = {
    movieName: '',
    movieLists: [],
  }

  handleOnPress = () => {
    axios.get(`${APIURL}&query=${this.state.movieName}`)
    .then((response) => {
      this.setState({movieLists: response.data.results})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleInput = (text) => {
    this.setState({movieName: text});
  }

  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    const movieLists = this.state.movieLists.map((movie) =>
      <Card key={movie.id}>
        <Image
          style={{width: width - 20, height: 500}}
          source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10
          }}
        >
          {movie.title}
        </Text>
      </Card>
    );

    return (
      <View style={styles.container}>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.inputFieldStyle}
            placeholder='Movie Name'
            onChangeText={this.handleInput}
            value={this.state.movieName}
          />
          <Button
            style={styles.searchButton}
            handleOnPress={this.handleOnPress}
          >
            Search
          </Button>
        </View>
        <ScrollView style={{marginTop: 10}}>
          {
            movieLists
          }
        </ScrollView>
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
import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';

const Routes = StackNavigator({
  Home: { screen:  Home },
});

export default class Main extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}
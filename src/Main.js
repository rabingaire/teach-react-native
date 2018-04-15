import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import NewPage from './components/NewPage';

const Routes = StackNavigator({
  Home: { screen:  Home },
  NewPage: { screen: NewPage },
});

export default class Main extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}
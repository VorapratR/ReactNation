import React from 'react';
import Weather from './components/Weather';
import Forcast from './components/Forcast';
export default class App extends React.Component {
  render() {
    return (
      <Forcast main="Voraprat" dascription="5910110288" temp="25"/>
    );
  }
}


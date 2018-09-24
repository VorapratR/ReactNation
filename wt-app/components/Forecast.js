import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
  doIt =()=> {
    console.log("Hello from console")
  }
  render() {
    return (
      <View>
        <Text>{this.props.main}</Text>
        <Text>{this.props.dascription}</Text>
        <Text>{this.props.temp}</Text>
        <Text>C</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

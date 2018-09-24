import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
  doIt =()=> {
    console.log("Hello from console")
  }
  render() {
    return (
      <View>
        <Text style={styles.font}>{this.props.main}</Text>
        <Text style={styles.font}>{this.props.dascription}</Text>
        <Text style={styles.font}>{this.props.temp}</Text>
        <Text style={styles.font}>C</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'center'
  },
  font:{
    paddingTop:20,
    color:'#fff',
    fontSize: 25
  }
});

import React from 'react';
import Forecast from './Forecast';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      forcast:{
        main:'-',dascription:'-',temp:'0'
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../beach.jpg')} style={styles.backdrop}>
          <Text>Zip code is{this.props.zipCode}</Text>
          <Forecast {...this.state.forcast}/>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { paddingTop: 25 },
  backdrop:{ width: '100%',height:'100%'},
});

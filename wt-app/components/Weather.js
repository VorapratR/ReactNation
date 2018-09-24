import React from 'react';
import Forecast from './Forecast';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

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
          <View style={styles.textbox}>
              <Text style={styles.font}>Zip code is{this.props.zipCode}</Text>    
              <Forecast {...this.state.forcast}/>
          </View>
          <View style={styles.container2}></View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    paddingTop: 20 
  },
  container2: { 
    flex: 3 
  },
  backdrop:{ 
    width: '100%',height:'100%'
  },
  font:{
    paddingTop:20,
    color:'#fff',
    fontSize: 25
  },
  textbox:{
    flex: 2, 
    backgroundColor:'#001',
    opacity: 0.3,
    alignItems: 'center'
  }
});

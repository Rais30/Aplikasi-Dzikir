import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

class Splash extends React.Component {
  render() {
    setTimeout(() => {
      this.props.navigation.replace('Home');
    }, 3000);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{fontSize:35,fontWeight:'bold'}}> Aplikasi Dzikir </Text>
        <ActivityIndicator color="#5df226" size="large"/>
      </View>
      
    );
  }
}

export default Splash;
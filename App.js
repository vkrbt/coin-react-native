import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const genRandSide = () => {
  return (Math.random() * 100) % 2 ^ 0;
}

export default class App extends Component {
  constructor() {

    super();
    this.state = {
      side: genRandSide(),
    }
  }

  generateSide = () => {
    this.setState({ side: genRandSide() })
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
        <TouchableOpacity
          style={styles.screen}
          onPress={this.generateSide}
        >
          <Image
            style={styles.image}
            source={this.state.side ? require('./assets/img/1.png') : require('./assets/img/0.png')}
          />
        </TouchableOpacity>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  image: {
    width: 256,
    height: 256
  }
});
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
  TextInput
} from 'react-native';

var regionText = {
  latitude: '0',
  longitude: '0',
  latitudeDelta: '0',
  longitudeDelta: '0',
};

class MapViewExample extends Component {
  constructor(props){
      super(props)

      this.state = {
          mapRegion: {
            latitude: 35.77382278442382,
            longitude: 103.18359375,
            latitudeDelta: 36.30959734943432,
            longitudeDelta: 77.93702933857062,
          }
      }
  }
  render() {
    const annotations = {
      latitude: 35.77382278442382,
      longitude: 103.18359375,
      title: 'test'
    }
    return (
      <View>
        <MapView
          style={styles.map}
          mapType="standard" // satellite,standard,hybrid
          region={this.state.mapRegion}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    height: 550,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

AppRegistry.registerComponent('demo_map', () => MapViewExample);

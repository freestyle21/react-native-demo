'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Slider,
  Text,
  StyleSheet,
  View
} from 'react-native';

class SliderExample extends Component {
  constructor(props){
      super(props)

      this.state = {
          value: 0
      }
  }

  render() {
    return (
      <View style={{padding: 20}}>
        <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
}
class demo_slider extends Component {
  constructor(props){
      super(props)

      this.state = {
      }
  }

  render() {
    return (<SliderExample 
              minimumValue={-1}
              maximumValue={2}
              step={0.25}
              minimumTrackTintColor={'red'}
              maximumTrackTintColor={'green'}
          />)
  }

}
const styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

AppRegistry.registerComponent('demo_slider', () => demo_slider);

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
  StatusBar,
  TouchableHighlight
} from 'react-native';

const colors = [
  '#ff0000',
  '#00ff00',
  '#0000ff',
];

const barStyles = [
  'default',
  'light-content',
];

const showHideTransitions = [
  'fade',
  'slide',
];
function getValue<T>(values: Array<T>, index: number): T {
  return values[index % values.length];
}

class StatusBarHiddenExample extends React.Component {
  constructor(props){
      super(props)

      this.state = {
          animated: true,
          hidden: false,
          showHideTransition: getValue(showHideTransitions, 0),
          _showHideTransitionIndex: 0
      }
  }

  _onChangeAnimated = () => {
    this.setState({animated: !this.state.animated});
  };

  _onChangeHidden = () => {
    this.setState({hidden: !this.state.hidden});
  };

  _onChangeTransition = () => {
    this.setState({
      _showHideTransitionIndex: this.state._showHideTransitionIndex + 1
    }, () => {
      this.setState({
        showHideTransition: getValue(showHideTransitions, this._showHideTransitionIndex),
      });
    })
    
  };

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="blue"
          hidden={this.state.hidden}
          showHideTransition={this.state.showHideTransition}
          animated={this.state.animated}
        />
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this._onChangeHidden}>
          <View style={styles.button}>
            <Text>hidden: {this.state.hidden ? 'true' : 'false'}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this._onChangeAnimated}>
          <View style={styles.button}>
            <Text>animated (ios only): {this.state.animated ? 'true' : 'false'}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this._onChangeTransition}>
          <View style={styles.button}>
            <Text>
              showHideTransition (ios only):
              '{getValue(showHideTransitions, this.state8y_showHideTransitionIndex)}'
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}


export default class demo_status_bar extends Component {
  render() {
    return (
      <View style={{padding: 40}}>
        <StatusBarHiddenExample />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('demo_status_bar', () => demo_status_bar);

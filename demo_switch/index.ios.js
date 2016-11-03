/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Switch,
  Text,
  View
} from 'react-native';


var examples = [
  {
    title: 'Switches can be set to true or false',
    render(): ReactElement<any> { return <BasicSwitchExample />; }
  },
  {
    title: 'Switches can be disabled',
    render(): ReactElement<any> { return <DisabledSwitchExample />; }
  },
  {
    title: 'Change events can be detected',
    render(): ReactElement<any> { return <EventSwitchExample />; }
  },
  {
    title: 'Switches are controlled components',
    render(): ReactElement<any> { return <Switch />; }
  }
];

if (Platform.OS === 'ios') {
  examples.push({
    title: 'Custom colors can be provided',
    render(): ReactElement<any> { return <ColorSwitchExample />; }
  });
}
class BasicSwitchExample extends React.Component {
  constructor(props){
      super(props)

      this.state = {
        trueSwitchIsOn: true,
        falseSwitchIsOn: false
      }
  }
  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          style={{marginBottom: 10}}
          value={this.state.falseSwitchIsOn} />
        <Switch
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          value={this.state.trueSwitchIsOn} />
      </View>
    );
  }
}

class DisabledSwitchExample extends React.Component {
  render() {
    return (
      <View>
        <Switch
          disabled={true}
          style={{marginBottom: 10}}
          value={true} />
        <Switch
          disabled={true}
          value={false} />
      </View>
    );
  }
}

class ColorSwitchExample extends React.Component {
  constructor(props){
      super(props)

      this.state = {
          colorTrueSwitchIsOn: true,
          colorFalseSwitchIsOn: false
      }
  }

  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({colorFalseSwitchIsOn: value})}
          onTintColor="#00ff00"
          style={{marginBottom: 10}}
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          value={this.state.colorFalseSwitchIsOn} />
        <Switch
          onValueChange={(value) => this.setState({colorTrueSwitchIsOn: value})}
          onTintColor="#00ff00"
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          value={this.state.colorTrueSwitchIsOn} />
      </View>
    );
  }
}

class EventSwitchExample extends React.Component {
  constructor(props){
      super(props)

      this.state = {
          eventSwitchIsOn: false,
          eventSwitchRegressionIsOn: true
      }
  }
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
          <Switch
            onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchIsOn} />
          <Switch
            onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchIsOn} />
          <Text>{this.state.eventSwitchIsOn ? 'On' : 'Off'}</Text>
        </View>
        <View>
          <Switch
            onValueChange={(value) => this.setState({eventSwitchRegressionIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchRegressionIsOn} />
          <Switch
            onValueChange={(value) => this.setState({eventSwitchRegressionIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchRegressionIsOn} />
          <Text>{this.state.eventSwitchRegressionIsOn ? 'On' : 'Off'}</Text>
        </View>
      </View>
    );
  }
}


export default class demo_switch extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
      <View style={{padding: 40}}>
          {
              examples.map(exam => {
                return (<View className="switch-item">
                      <Text >
                          {exam.title}
                      </Text>
                      <View>
                      {
                        exam.render()
                      }
                      </View>
                  </View>)
              })
          }
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
});

AppRegistry.registerComponent('demo_switch', () => demo_switch);

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
  AdSupportIOS
} from 'react-native';

export default class demo_ad_support_ios extends Component {
  constructor(props){
      super(props)

      this._onHasTrackingSuccess = this._onHasTrackingSuccess.bind(this)
      this._onHasTrackingFailure = this._onHasTrackingFailure.bind(this)
      this._onDeviceIDSuccess = this._onDeviceIDSuccess.bind(this)
      this._onDeviceIDFailure = this._onDeviceIDFailure.bind(this)
      
      this.state = {
        deviceID: 'No IDFA yet',
        hasAdvertiserTracking: 'unset'
      }
  }
  componentDidMount() {
    AdSupportIOS.getAdvertisingId(this._onDeviceIDSuccess,this._onDeviceIDFailure);

    AdSupportIOS.getAdvertisingTrackingEnabled(this._onHasTrackingSuccess,this._onHasTrackingFailure);
  }
  _onHasTrackingSuccess (hasTracking) {
    this.setState({
      'hasAdvertiserTracking': hasTracking,
    })
  }

  _onHasTrackingFailure() {
    this.setState({
      'hasAdvertiserTracking': 'Error!',
    })
  }

  _onDeviceIDSuccess (deviceID) {
    this.setState({
      'deviceID': deviceID,
    })
  }

  _onDeviceIDFailure() {
    this.setState({
      'deviceID': 'Error!',
    })
  }


  render() {
    return (
      <View style={{padding: 40}}>
        <Text>
          <Text style={styles.title}>Advertising ID: </Text>
          {JSON.stringify(this.state.deviceID)}
        </Text>
        <Text>
          <Text style={styles.title}>Has Advertiser Tracking: </Text>
          {JSON.stringify(this.state.hasAdvertiserTracking)}
        </Text>
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
  title: {
    fontWeight: '500',
  }
});

AppRegistry.registerComponent('demo_ad_support_ios', () => demo_ad_support_ios);

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ProgressViewIOS
} from 'react-native';

import TimerMixin from 'react-timer-mixin';

class demo_progress_view_ios extends Component {
  constructor(props){
      super(props)

      this.getProgress = this.getProgress.bind(this)
      this.updateProgress = this.updateProgress.bind(this)
      this.state = {
          progress: 0
      }
  }

  componentDidMount() {
    this.updateProgress();
  }

  updateProgress() {
    var progress = this.state.progress + 0.01;
    this.setState({ progress });
    // this.requestAnimationFrame(() => this.updateProgress());
  }

  getProgress(offset) {
    var progress = this.state.progress + offset;
    return Math.sin(progress % Math.PI) % 1;
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressViewIOS style={styles.progressView} progress={this.getProgress(0)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="purple" progress={this.getProgress(0.2)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="red" progress={this.getProgress(0.4)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={this.getProgress(0.6)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={this.getProgress(0.8)}/>
      </View>
    );
  }
}

exports.displayName = (undefined: ?string);
exports.framework = 'React';
exports.title = 'ProgressViewIOS';
exports.description = 'ProgressViewIOS';
exports.examples = [{
  title: 'ProgressViewIOS',
  render() {
    return (
      <ProgressViewExample/>
    );
  }
}];

var styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'transparent',
  },
  progressView: {
    marginTop: 20,
  }
});
AppRegistry.registerComponent('demo_progress_view_ios', () => demo_progress_view_ios);
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
  ActionSheetIOS,
  UIManager
} from 'react-native';

var BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class ActionSheetExample extends React.Component {
  constructor(props) {
    super(props)

    this.showActionSheet = this.showActionSheet.bind(this)
    this.state = {
      clicked: 'none'
    }
  }

  render() {
    return (
      <View>
        <Text onPress={this.showActionSheet} style={styles.button}>
          Click to show the ActionSheet
        </Text>
        <Text>
          Clicked button: {this.state.clicked}
        </Text>
      </View>
    );
  }

  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  };
}

class ActionSheetTintExample extends React.Component {
  constructor(props) {
    super(props);
    this.showActionSheet = this.showActionSheet.bind(this)
    this.state = {
      clicked: 'none'
    }
  }


  render() {
    return (
      <View>
        <Text onPress={this.showActionSheet} style={styles.button}>
          Click to show the ActionSheet
        </Text>
        <Text>
          Clicked button: {this.state.clicked}
        </Text>
      </View>
    );
  }

  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
      tintColor: 'green',
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  };
}

class ShareActionSheetExample extends React.Component {
  constructor(props) {
    super(props)

    this.showShareActionSheet = this.showShareActionSheet.bind(this)
    this.state = {
      text: 'none'
    }
  }

  render() {
    return (
      <View>
        <Text onPress={this.showShareActionSheet} style={styles.button}>
          Click to show the Share ActionSheet
        </Text>
        <Text>
          {this.state.text}
        </Text>
      </View>
    );
  }

  showShareActionSheet() {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: this.props.url,
      message: 'message to go with the shared url',
      subject: 'a subject to go in the email heading',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    },
    (error) => alert(error),
    (success, method) => {
      var text;
      if (success) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      this.setState({text});
    });
  };
}

class ShareScreenshotExample extends React.Component {
  constructor(props){
      super(props)

      this.showShareActionSheet = this.showShareActionSheet.bind(this)
      this.state = {
        text: ''
      }
  }

  render() {
    return (
      <View>
        <Text onPress={this.showShareActionSheet} style={styles.button}>
          Click to show the Share ActionSheet
        </Text>
        <Text>
          {this.state.text}
        </Text>
      </View>
    );
  }

  showShareActionSheet() {
    // Take the snapshot (returns a temp file uri)
    UIManager.takeSnapshot('window').then((uri) => {
      // Share image data
      ActionSheetIOS.showShareActionSheetWithOptions({
        url: uri,
        excludedActivityTypes: [
          'com.apple.UIKit.activity.PostToTwitter'
        ]
      },
      (error) => alert(error),
      (success, method) => {
        var text;
        if (success) {
          text = `Shared via ${method}`;
        } else {
          text = 'You didn\'t share';
        }
        this.setState({text});
      });
    }).catch((error) => alert(error));
  };
}
const examples = [
  {
    title: 'Show Action Sheet',
    render: function() { return <ActionSheetExample />; }
  },
  {
    title: 'Show Action Sheet with tinted buttons',
    render: function() { return <ActionSheetTintExample />; }
  },
  {
    title: 'Show Share Action Sheet',
    render: function() {
      return <ShareActionSheetExample url="https://code.facebook.com" />;
    }
  },
  {
    title: 'Share Local Image',
    render: function() {
      return <ShareActionSheetExample url="bunny.png" />;
    }
  },
  {
    title: 'Share Screenshot',
    render: function() {
      return <ShareScreenshotExample />;
    }
  }
];

export default class demo_action_sheet_ios extends Component {
  render() {
    return (<View style={{padding: 40}} >
      {
        examples.map((exam,key) => {
          return (<View key={key} style={{marginBottom: 30}}> 
            <Text style={{color: 'red'}}>{exam.title}</Text>
            <View>{exam.render()}</View>
          </View>)
        })
      }
    </View>)
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
  button: {
    marginBottom: 10,
    fontWeight: '500',
  }
});

AppRegistry.registerComponent('demo_action_sheet_ios', () => demo_action_sheet_ios);

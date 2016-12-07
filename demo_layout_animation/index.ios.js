/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

class AddRemoveExample extends React.Component {
  constructor(props){
      super(props)

      this._onPressRemoveView = this._onPressRemoveView.bind(this)
      this._onPressAddView = this._onPressAddView.bind(this)

      this.state = {
        views: []
      }
  }
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  _onPressAddView() {
    this.setState((state) => ({views: [...state.views, {}]}));
  };

  _onPressRemoveView() {
    this.setState((state) => ({views: state.views.slice(0, -1)}));
  };

  render() {
    const views = this.state.views.map((view, i) =>
      <View key={i} style={styles.view}>
        <Text>{i}</Text>
      </View>
    );
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressAddView}>
          <View style={styles.button}>
            <Text style={{color: '#000'}}>Add view</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressRemoveView}>
          <View style={styles.button}>
            <Text>Remove view</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewContainer}>
          {views}
        </View>
      </View>
    );
  }
}

const GreenSquare = () =>
  <View style={styles.greenSquare}>
    <Text>Green square</Text>
  </View>

const BlueSquare = () =>
  <View style={styles.blueSquare}>
    <Text>Blue square</Text>
  </View>

class CrossFadeExample extends React.Component {
  constructor(props){
      super(props)

      this._onPressToggle = this._onPressToggle.bind(this)
      this.state = {  
         toggled: false
      }
  }

  _onPressToggle () {
    LayoutAnimation.easeInEaseOut();
    this.setState({toggled: !this.state.toggled});
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressToggle}>
            <Text>Toggle</Text>
        </TouchableOpacity>
        <View style={styles.viewContainer}>
          {
            this.state.toggled ?
            <GreenSquare /> :
            <BlueSquare />
          }
        </View>
      </View>
    );
  }
}

// const examples = [{
//   title: 'Cross fade views',
//   render() {
//     return <CrossFadeExample />;
//   },
// }]
const examples = [{
  title: 'Add and remove views',
  render() {
    return <AddRemoveExample />;
  },
}, {
  title: 'Cross fade views',
  render() {
    return <CrossFadeExample />;
  },
}]
export default class demo_layout_animation extends Component {
  render() {
      return (<View style={{padding: 40}} >
      {
        examples.map((exam,key) => {
          return (<View key={key} style={{marginBottom: 30, marginTop: 20}}> 
            <Text style={{color: 'red'}}>{exam.title}</Text>
            {exam.render()}
          </View>)
        })
      }
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30
  },
  view: {
    height: 54,
    width: 54,
    backgroundColor: 'red',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenSquare: {
    width: 150,
    height: 150,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueSquare: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('demo_layout_animation', () => demo_layout_animation);

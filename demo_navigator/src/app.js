import React from 'react';
import {
    View,
    Navigator,
    AppRegistry
} from 'react-native';
import FirstPageComponent from './FirstPageComponent';

export default class demo_navigator extends React.Component {
    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
        return (
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
        );
    }
}
AppRegistry.registerComponent('demo_navigator', () => demo_navigator);

//SecondPageComponent.js

const USER_MODELS = {
    1: { name: 'mot', age: 23 },
    2: { name: '晴明大大', age: 25 }
};

import React from 'react';
import {
    View,
    Navigator,
    Text,
    TouchableOpacity
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }

    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id
        this.setState({
            id: this.props.id
        });
    }

    _pressButton() {
            const { navigator } = this.props;

            if(this.props.getUser) {
                let user = USER_MODELS[this.props.id];
                this.props.getUser(user);
            }

            if(navigator) {
                navigator.pop();
            }
    }

    render() {
        return(
            <View style={{padding: 40}}>
                <Text>获得的参数: id={ this.state.id }</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳回去</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import JYMain from './src/Main/JYMainPage';

export default class RN_MeiTuanDemo extends Component {
    render() {
        return (
            <JYMain />
        );
    }
}

AppRegistry.registerComponent('RN_MeiTuanDemo', () => RN_MeiTuanDemo);

/**
 * Created by Jeson on 12/07/2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Main from '../Main/JYMainPage';

class LaunchImage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <Image source={{uri:'LaunchImage'}} style={styles.launchImageStyle}/>
        );
    }

    componentDidMount() {
        //定时 隔2s切换界面
        setTimeout(() => {
            this.props.navigator.replace({
                component: Main
            });
        })
    }
}

const styles = StyleSheet.create({
    launchImageStyle: {
        flex: 1
    }

});

module.exports = LaunchImage;
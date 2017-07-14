/**
 * Created by Jeson on 10/07/2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class JYHomeDetailPage extends Component {
    static navigationOptions = {
        title: 'HomeDetail',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    HomeDetail
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

    }

});

module.exports = JYHomeDetailPage;

/*
*/
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class JYMorePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    More
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

module.exports = JYMorePage;
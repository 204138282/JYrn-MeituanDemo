import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class JYShopPage extends Component {
    static navigationOptions = {
        title: 'Shop'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Shop
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

module.exports = JYShopPage;
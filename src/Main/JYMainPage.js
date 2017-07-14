import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Button
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import HomeScreen from '../Home/JYHomePage';
import ShopScreen from '../Shop/JYShopPage';
import MineScreen from '../Mine/JYMinePage';
import MoreScreen from '../More/JYMorePage';
import HomeDetail from '../Home/JYHomeDetailPage';

class JYMainPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tabBarChange: 'Home'
        }
    }

    render() {
        return (
            <Navigator/>
        );
    }
}


const styles = StyleSheet.create({
    iconStyle: {
        width: 30, //Platform.OS ==='ios' ? 30 : 25   根据Android和iOS平台设置不同尺寸
        height: 30
    }

});

const TabNav = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => (
                <Image source={{uri: 'pfb_tabbar_homepage'}} style={{width: 25, height: 25, tintColor:'green'}} />
            ),
            title: '首页',
            headerTitleStyle: {
                fontSize: 16,
                alignSelf: 'center',
                color: '#000000'
            },
            headerStyle: {
                backgroundColor: 'rgba(87,190,174,0.8)'
            },
        }),
    },
    Shop: {
        screen: ShopScreen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '商家',
            tabBarIcon: ({ tintColor }) => (
                <Image source={{uri: 'pfb_tabbar_discover'}} style={{width: 25, height: 25, tintColor:'green'}} />
            ),
            title: '商家',
            headerTitleStyle: {
                fontSize: 16,
                alignSelf: 'center',
                color: '#000000'
            },
            headerStyle: {
                backgroundColor: 'rgba(87,190,174,0.8)'
            },
        }),
    },
    Mine: {
        screen: MineScreen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (
                <Image source={{uri: 'pfb_tabbar_mine'}} style={{width: 25, height: 25, tintColor:'green'}} />
            ),
            title: '我的',
            headerTitleStyle: {
                fontSize: 16,
                alignSelf: 'center',
                color: '#000000'
            },
            headerStyle: {
                backgroundColor: 'rgba(87,190,174,0.8)'
            },
        }),
    },
    More: {
        screen: MoreScreen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '更多',
            tabBarIcon: ({ tintColor }) => (
                <Image source={{uri: 'pfb_tabbar_order'}} style={{width: 25, height: 25, tintColor:'green'}} />
            ),
            title: '更多',
            headerTitleStyle: {
                fontSize: 16,
                alignSelf: 'center',
                color: '#000000'
            },
            headerStyle: {
                backgroundColor: 'rgba(87,190,174,0.8)'
            },
        }),
    }
});

const Navigator = StackNavigator({
    MainHome: { screen: TabNav },
    Home: { screen: HomeScreen },
    Shop: { screen: ShopScreen },
    Mine: { screen: MineScreen },
    More: { screen: MoreScreen },
    HomeDetail: {screen: HomeDetail}
});


module.exports = JYMainPage;

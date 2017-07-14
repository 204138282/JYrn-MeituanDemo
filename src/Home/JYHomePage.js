import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ListView,
    AlertIOS,
    RefreshControl,
    TouchableWithoutFeedback//刷新控件时使用
} from 'react-native';

import tsconfigData from '../jsonFiles/tsconfig.json';
import secondListData from '../jsonFiles/secondList.json';
import thirdListData from '../jsonFiles/thirdList.json';

import Dimensions from 'Dimensions';
var {width} = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;
let cols = 5;
let cellSize = 60;
let vMargin = (screenWidth - cellSize * cols) / (cols + 1);//间距
let hMargin = 40;
let viewHeight = hMargin * 2 + 20 +cellSize * 2;
class JYHomePage extends Component {
    static navigationOptions = {
        headerLeft: (
            <View style={{
                marginLeft: 15,
                width: 50,
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 16, color: 'white'}}>西安</Text>
            </View>
        ),
        headerRight: (
            <View style={{
                marginRight: 15,
                alignItems: 'center',
                }
            }>
                <Image source={{uri:'icon_navigationItem_message_white'}} style={{width:30, height:30}}/>
            </View>
        )
    };

    constructor (props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(tsconfigData),
            bdataSource: ds.cloneWithRows(secondListData),
            cdataSource: ds.cloneWithRows(thirdListData),


            //-----------------Refresh控件
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(20)).map(
                (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
            //-----------------Refresh控件


        }
    }

    //----------------------Refresh控件
    _onClick(row) {
        row.clicks++;
        this.setState({
            rowData: this.state.rowData,
        });
    }

    _onRefresh () {
        this.setState({isRefreshing:true});
        setTimeout(() =>{
            const rowData = Array.from(new Array(10))
                .map((val, i) => ({
                    text: 'Loaded row ' + (+this.state.loaded + i),
                    clicks: 0,
                }))
                .concat(this.state.rowData);
            this.setState({
                isRefreshing:false,
                loaded:this.state.loaded + 10,
                rowData: rowData
            });
        },5000);
    }
    //-----------------------Refresh控件

    render() {

        {/*----------------Refresh控件----------------*/}
        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row} onClick={this._onClick}/>;
        });
        {/*----------------Refresh控件----------------*/}


        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{backgroundColor:'rgba(243,243,243,0.5)'}}

                //----------------Refresh控件----------------
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onrefresh={this._onRefresh}
                        tintColor={'#ff0000'}
                        title={'Loading...'}
                        titlecolor={'#00ff00'}
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressbackgroundcolor={'#ffff00'}
                    />

                }>
                {rows}
                {/*----------------Refresh控件----------------*/}

                <View style={{height:viewHeight, borderBottomWidth: 0.5,borderBottomColor:'gray'}}>
                    <ListView
                        contentContainerStyle={styles.listViewStyle}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>
                <View style={{marginTop:20,
                                borderTopWidth: 0.5,
                                borderTopColor:'gray',
                                borderBottomWidth: 0.5,
                                borderBottomColor:'gray'}}
                >
                    <ListView
                        contentContainerStyle={styles.secondlistViewStyle}
                        dataSource={this.state.bdataSource}
                        renderRow={this.secondRenderRow}
                    />
                </View>
                <View style={{}}>
                    <ListView
                        contentContainerStyle={styles.thirdListViewStyle}
                        dataSource={this.state.cdataSource}
                        renderRow={this.thirdRenderRow}
                    />
                </View>
            </ScrollView>
        );
    }

    renderRow (rowData,rowID) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() =>AlertIOS.alert('当前点击的是'+'['+rowData.title+']')}>
                <View style={styles.innerViewStyle}>
                    <Image source={{uri:rowData.icon}} style={styles.iconStyle}/>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    secondRenderRow (rowData) {
        var tempStyle = '';
        if (rowData.title === '立减15元') {
            tempStyle = 'rgba(228,169,86,1.0)'
        }else if (rowData.title === '电影特惠') {
            tempStyle = 'rgba(229,118,132,1.0)'
        }else if (rowData.title === '旅游出行') {
            tempStyle = 'rgba(134,189,61,1.0)'
        }else {
            tempStyle = 'rgba(101,197,184,1.0)'
        }
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() =>AlertIOS.alert('当前点击的是'+'['+rowData.title+']')}>
                <View style={styles.secondInnerViewStyle}>
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:20 ,fontWeight:'bold', color:tempStyle}}>{rowData.title}</Text>
                        <Text style={{fontSize:17 ,marginTop:10}}>{rowData.tip}</Text>
                    </View>
                    <Image source={{uri:rowData.icon}} style={styles.secondIconStyle}/>
                </View>
            </TouchableOpacity>
        )
    }

    thirdRenderRow (rowData) {
        return (
        <TouchableOpacity>
            <View style={styles.thirdTouchViewStyle}>
                <Image source={{uri:rowData.icon}} style={styles.thirdIconStyle}/>
                <View style={styles.thirdInnerStyle}>
                    <Text style={{fontSize:18, marginTop:15, fontWeight:'bold', color: 'black'}}>{rowData.title}</Text>
                    <Text style={{fontSize:15, marginTop:10, color:'gray', flexWrap: 'wrap'}}>{rowData.tip}</Text>
                    <Text style={{fontSize:18, marginTop:20, fontWeight:'bold', color:'rgba(101,197,184,1.0)'}}>{rowData.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    listViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    iconStyle: {
        width: cellSize,
        height: cellSize
    },
    innerViewStyle: {
        width: cellSize,
        height: 75,
        marginLeft: vMargin,
        marginTop: 20,
        alignItems: 'center',
    },
    secondlistViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    secondInnerViewStyle: {
        flexDirection: 'row',
        width: width / 2,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.5,
        borderRightColor: 'gray'
    },
    secondIconStyle: {
        width: 70,
        height: 70,
        marginRight: 10
    },
    thirdListViewStyle: {

    },
    thirdTouchViewStyle: {
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5
    },
    thirdIconStyle: {
        width: 100,
        height: 100,
        margin: 10
    },
    thirdInnerStyle: {
        width: screenWidth - 10 - 100 -10 - 5,
        marginLeft: 10,
        marginBottom: 2
    },


//---------------Refresh控件
row: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    scrollview: {
        flex: 1,
    },
//---------------Refresh控件

});

//----------------Refresh控件----------------
const Row = React.createClass({
    _onClick: function() {
        this.props.onClick(this.props.data);
    },
    render: function() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick} >
                <View style={styles.row}>
                    <Text style={styles.text}>
                        {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    },
});
//----------------Refresh控件----------------


module.exports = JYHomePage;
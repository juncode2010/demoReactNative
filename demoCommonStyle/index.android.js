/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    ScrollView
} from 'react-native';
var Dimensions = require('Dimensions');

export default class demoCommonStyle extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
          <View>
        <View style={[styles.columnView,styles.hCenterColumnView]}>
          <View style={styles.redView}></View>
            <View style={styles.whiteView}>
                <Text>column水平居中</Text>
            </View>
            <View style={styles.blueView}></View>
        </View>

        <View style={[styles.rowView,styles.hCenterRowView]}>
            <View style={styles.redView}></View>
            <View style={styles.whiteView}>
                <Text>row水平居中</Text>
            </View>
            <View style={styles.blueView}></View>
        </View>

          <View style={[styles.columnView,styles.vCenterColumnView]}>
              <View style={styles.redView}></View>
              <View style={styles.whiteView}>
                  <Text>column垂直居中</Text>
              </View>
              <View style={styles.blueView}></View>
          </View>

          <View style={[styles.rowView,styles.vCenterRowView]}>
              <View style={styles.redView}></View>
              <View style={styles.whiteView}>
                  <Text>row垂直居中</Text>
              </View>
              <View style={styles.blueView}></View>
          </View>

              <View style={[styles.columnView,styles.rightColumnView]}>
                  <View style={styles.redView}></View>
                  <View style={styles.whiteView}>
                      <Text>column居右</Text>
                  </View>
                  <View style={styles.blueView}></View>
              </View>

              <View style={[styles.rowView,styles.rightRowView]}>
                  <View style={styles.redView}></View>
                  <View style={styles.whiteView}>
                      <Text>row居右</Text>
                  </View>
                  <View style={styles.blueView}></View>
              </View>

              <View style={[styles.columnView,styles.bottomColumnView]}>
                  <View style={styles.redView}></View>
                  <View style={styles.whiteView}>
                      <Text>column居下</Text>
                  </View>
                  <View style={styles.blueView}></View>
              </View>

              <View style={[styles.rowView,styles.bottomRowView]}>
                  <View style={styles.redView}></View>
                  <View style={styles.whiteView}>
                      <Text>row居下</Text>
                  </View>
                  <View style={styles.blueView}></View>
              </View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  columnView:{
    //flex:'none',//ReactNative中不能使用none和auto
      flexDirection:'column',
      height:160,//大于子控件的总高度,这样才能看出效果
      backgroundColor:'#cccccc',
      width:Dimensions.get('window').width
  },
  rowView:{
    //flex:1,
      width:Dimensions.get('window').width,
      height:65,//大于子控件的总高度,这样才能看出效果
      flexDirection:'row',
      backgroundColor:'#999999',
  },
  redView:{
      //flex:1,
    backgroundColor:'#cc0000',
    width:80,
    height:40
  },
  blueView:{
    backgroundColor:'#000080',
      width:80,
      height:40
  },
  blackView:{
    backgroundColor:'#000000',
      width:80,
      height:40
  },
    whiteView:{
        backgroundColor:'#ffffff',
        width:80,
        height:40
    },
    hCenterRowView:{
        justifyContent:'center',
    },
    hCenterColumnView:{
        alignItems:'center',
    },
    vCenterRowView:{
        alignItems:'center',
    },
    vCenterColumnView:{
        justifyContent:'center',
    },
    rightRowView:{
        justifyContent:'flex-end',
    },
    rightColumnView:{
        alignItems:'flex-end',
    },
    bottomRowView:{
        alignItems:'flex-end',
    },
    bottomColumnView:{
        justifyContent:'flex-end',
    },
});

AppRegistry.registerComponent('demoCommonStyle', () => demoCommonStyle);

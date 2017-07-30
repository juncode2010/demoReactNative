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
                <Text style={styles.text}>column水平居中</Text>
            </View>
            <View style={styles.blueView}></View>
        </View>

        <View style={[styles.rowView,styles.hCenterRowView]}>
            <View style={styles.redView}></View>
            <View style={styles.whiteView}>
                <Text style={styles.text}>row水平居中</Text>
            </View>
            <View style={styles.blueView}></View>
        </View>

          <View style={[styles.columnView,styles.vCenterColumnView]}>
              <View style={styles.redView}></View>
              <View style={styles.whiteView}>
                  <Text style={styles.text}>column垂直居中</Text>
              </View>
              <View style={styles.blueView}></View>
          </View>

          <View style={[styles.rowView,styles.vCenterRowView]}>
              <View style={styles.redView}></View>
              <View style={styles.whiteView}>
                  <Text style={styles.text}>row垂直居中</Text>
              </View>
              <View style={styles.blueView}></View>
          </View>

              <View style={[styles.columnView,styles.rightColumnView]}>
                  <View style={styles.redView}></View>
                  <View style={styles.whiteView}>
                      <Text style={styles.text}>column居右</Text>
                  </View>
                  <View style={styles.blueView}></View>
              </View>

              <View style={[styles.rowView,styles.rightRowView]}>
                  <View style={styles.redView}></View>
                  <View style={styles.whiteView}>
                      <Text style={styles.text}>row居右</Text>
                  </View>
                  <View style={styles.blueView}></View>
              </View>

              <View style={[styles.columnView,styles.bottomColumnView]}>
                  <View style={styles.redView}></View>
                  <View style={styles.whiteView}>
                      <Text style={styles.text}>column居下</Text>
                  </View>
                  <View style={styles.blueView}></View>
              </View>

              <View style={[styles.rowView,styles.bottomRowView]}>
                  <View style={styles.redView}></View>
                  <View style={styles.whiteView}>
                      <Text style={styles.text}>row居下</Text>
                  </View>
                  <View style={styles.blueView}></View>
              </View>

              <View style={[styles.columnView]}>
                  <View style={styles.redView}></View>
                  <View style={[styles.whiteView,styles.selfCenterView]}>
                      <Text style={styles.text}>column单独居中</Text>
                  </View>
                  <View style={styles.blueView}></View>
              </View>

              <View style={[styles.rowView]}>
                  <View style={styles.redView}></View>
                  <View style={styles.whiteView}>

                  </View>
                  <View style={styles.hiddenView}>
                      <Text style={[styles.text,]}>隐藏View</Text>
                  </View>
                  <View style={[styles.blueView,]}>
                      <Text style={[{color:'red'},styles.text]}>row tailView居右</Text>
                  </View>
              </View>

              <View style={[styles.columnView]}>
                  <View style={styles.redView}></View>
                  <View style={[styles.whiteView,styles.columnSelfRightView]}>
                      <Text style={styles.text}>column单独居右</Text>
                  </View>
                  <View style={styles.blueView}></View>
              </View>

              <View style={[styles.rowView]}>
                  <View style={styles.redView}></View>
                  <View style={[styles.whiteView,styles.rowSelfBottomView]}>
                      <Text style={styles.text}>row单独居下</Text>
                  </View>
                  <View style={styles.blueView}></View>
              </View>

              <View style={[styles.columnView]}>
                  <View style={styles.redView}></View>
                  <View style={styles.whiteView}>

                  </View>
                  <View style={styles.hiddenView}>
                      <Text style={[styles.text,{textAlign:'left'}]}>隐藏View</Text>
                  </View>
                  <View style={[styles.blueView,]}>
                      <Text style={[{color:'red',},styles.text]}>column tailView居下</Text>
                  </View>
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
      width:Dimensions.get('window').width,
      flexDirection:'column',
      height:160,//大于子控件的总高度,这样才能看出效果
      backgroundColor:'#cccccc',
      marginTop:5,
      marginBottom:5
  },
  rowView:{
    //flex:1,
      width:Dimensions.get('window').width,
      height:65,//大于子控件的总高度,这样才能看出效果
      flexDirection:'row',
      backgroundColor:'#999999',
      marginTop:5,
      marginBottom:5
  },
    text:{
        textAlign:'center'
    },
  redView:{
      //flex:1,
    backgroundColor:'#cc0000',
    width:80,
    height:40,

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
        backgroundColor:'#FFD39B',
        width:80,
        height:40
    },
    hiddenView:{
        flex:1,
        backgroundColor:'#cccccc',
        opacity:0.5
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
    selfCenterView:{
        alignSelf:'center'
    },
    columnSelfRightView:{
        alignSelf:'flex-end'
    },
    rowSelfBottomView:{
        alignSelf:'flex-end'
    }

});

AppRegistry.registerComponent('demoCommonStyle', () => demoCommonStyle);

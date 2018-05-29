import React, { Component } from 'react';
import {
  AppRegistry, ScrollView, Image, Text , ViewPagerAndroid, View , StyleSheet , FlatList , SectionList , ActivityIndicator
} from 'react-native';
export default class HomeScreen extends Component {    
  render () {
    var styles = {
     
      viewPager: {
        flex: 1
      },
      pageStyle: {
        alignItems: 'center',
        padding: 20,
      }
    }
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
        <View style={styles.pageStyle} key="1">
          <Text>First page</Text>
        </View>
        <View style={styles.pageStyle} key="2">
          <Text>Second page</Text>
        </View>
      </ViewPagerAndroid>
    );
  }
}

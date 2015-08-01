/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} = React;

var ScrollableTabView = require('react-native-scrollable-tab-view');
var FacebookTabBar = require('./FacebookTabBar');
var deviceWidth = Dimensions.get('window').width;

var App = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <ScrollableTabView render={() => <FacebookTabBar />}>
          <ScrollView tabLabel="Vou agora" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Vou agora</Text>
            </View>
            <View style={styles.card}>
              <Text>Vou agora</Text>
            </View>
            <View style={styles.card}>
              <Text>Vou agora</Text>
            </View>
            <View style={styles.card}>
              <Text>Vou agora</Text>
            </View>
            <View style={styles.card}>
              <Text>Vou agora</Text>
            </View>
            <View style={styles.card}>
              <Text>Vou agora</Text>
            </View>
            <View style={styles.card}>
              <Text>Vou agora</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="Todas as linhas" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Todas as linhas</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  tabView: {
    width: deviceWidth,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#CCC',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

AppRegistry.registerComponent('App', () => App);

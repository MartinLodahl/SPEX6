import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import Basics from './Basics';
import Props from './Props';
import State from './State';
import Style from './Style';
import HW from './HeigthWidth';
import FlexBox from './FlexBox';
import txtInput from './TextInput';
import Touches from './Touches';
import ScrollView from './ScrollView';
import ListViews from './ListViews';
import NetWorking from './NetWorking';

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

//Todo: Refactor into a seperate file (WhatToDo.js), import and complete the exercise
class WhatToDo extends React.Component {
  static navigationOptions = { title: "What I have to do" }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: 3 }}>Complete all steps in Facebooks "The Basics" tutorial (see below)</Text>
        <Text style={{ marginBottom: 3 }}>For each of the 11 steps, add a corresponding Component in this project + the necessecary changes to navigate into it.
        (inspired of how you navigated into this)
      </Text>
        <WebView
          source={{ uri: "https://facebook.github.io/react-native/docs/tutorial.html" }}
          style={{ marginTop: 20, flex: 1 }}
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by Martin</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="State" />
        <Touchable onPress={() => navigate('style')} title="Style" />
        <Touchable onPress={() => navigate('hw')} title="HeightWidth" />
        <Touchable onPress={()=> navigate('flexbox')} title="FlexBox"/>
        <Touchable onPress={()=> navigate('txtInput')} title="TextInput"/>
        <Touchable onPress={()=> navigate('touches')} title="Touches"/>
        <Touchable onPress={()=> navigate('scrollView')} title="ScrollView"/>
        <Touchable onPress={()=> navigate('listViews')} title="ListViews"/>
        <Touchable onPress={()=> navigate('netWorking')} title="NetWorking"/>
      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  web: { screen: WhatToDo },
  state:{ screen: State},
  style:{ screen: Style},
  hw:{ screen: HW},
  flexbox:{ screen: FlexBox},
  txtInput:{screen:txtInput},
  touches:{screen:Touches},
  scrollView:{screen:ScrollView},
  listViews:{screen:ListViews},
  netWorking:{screen:NetWorking}
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})
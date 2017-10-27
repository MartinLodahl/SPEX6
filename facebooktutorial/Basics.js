import React from 'react';
import {Text, View} from 'react-native';

//Todo: Refactor into a seperate file (Basics.js), import and complete the exercise
export default class Basics extends React.Component {
    static navigationOptions = { title: "Learn the Basics" }
    render() {
      return (<View><Text>Hello World!</Text></View>)
    }
  }
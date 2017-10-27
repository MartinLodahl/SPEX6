import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class ScrollingView extends Component{
    render(){
        return(
            <IScrolledDownAndWhatHappenedNextShockedMe/>
        );
    }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return (
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Image source={require('./react-logo.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}
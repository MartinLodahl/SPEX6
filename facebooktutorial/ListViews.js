import React, { Component } from 'react';
import { SectionList, FlatList, StyleSheet, Text, View } from 'react-native';

export default class ListViews extends Component{
    render () {
        let p = ['Peter', 'Pia', 'Pirger', 'PropsData']
        return (
            [
                <FlatListBasics/>,
                <SectionListBasics data={p}/>
            ]
        );
    }
}

class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles2.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title: 'P', data: this.props.data},
          ]}
          renderItem={({item}) => <Text style={styles2.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles2.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles2 = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
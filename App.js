import React, { useState } from 'react';
import {Text, View, FlatList} from 'react-native';

export default class App extends React.Component {
  myFunc(info) {
    console.warn('it should log me!');
    console.warn(info);
  }

  extractor(item, index) {
    console.log("item", item);
    console.log("index", index);
    return index;
  } 

  render() {
    //it not work
    const data = [0, 5, 6, 7, 1, 1, 2, 3, 1];
    // Using array without leading 0 will work
    // const data = [1, 5, 6, 7, 1, 1, 2, 3, 1];
    console.log(data);
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => <Text style={{fontSize: 80}}> ss </Text>}
          keyExtractor={(item, index) => index.toString()}
          onViewableItemsChanged={this.myFunc}
        />
      </View>
    );
  }
}

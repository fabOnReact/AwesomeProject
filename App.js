/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, FlatList, Text, RefreshControl } from 'react-native';
import { POSTS } from './posts'; 

function Item({ title, vote }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{vote}</Text>
    </View>
  );
}

const App: () => React$Node = () => {
  const [refreshing, setRefreshing] = useState(false);  
  return (
    <FlatList
      data={POSTS}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      // onRefresh={() => setRefreshing(true)}
      // refreshing={refreshing}
      refreshControl={<RefreshControl refreshing={true} />}
      inverted
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;

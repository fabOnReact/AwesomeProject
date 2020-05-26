import * as React from 'react';
import { Text, ScrollView } from 'react-native';

import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <ScrollView>
      <Text style={{ fontSize: 20 }}>Native Component</Text>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
      <Text style={{ fontSize: 20 }}>WebView</Text>
      <WebView style={{ height: 1000 }} source={{ uri: 'https://fabriziobertoglio.xyz/' }} />
    </ScrollView>
  );
};

export default App;

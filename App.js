/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  LogBox,
  StyleSheet,
  View,
} from 'react-native';
import NavigationContainer from './route/nav';
import { Provider } from 'react-redux';
import Store from './store/store';

const App = () => {

  LogBox.ignoreLogs([
    'source.uri should not be an empty string'
  ])

  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <NavigationContainer /> 
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;

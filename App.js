import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Accordion from './components/Accordion';

const App = () => {
  return (
    <View style={styles.container}>
      <Accordion />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default App;

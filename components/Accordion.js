import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import List from './List';

const listitem = {
  name: 'Total Points',
  items: [
    {name: 'Nathaniel Fitzgerald', points: '$3.45'},
    {name: 'Lawrence Fullter Fitzgerald', points: '$3.45'},
    {name: 'Jacob Mullins', points: '$3.45'},
    {name: 'Jesus Lewis', points: '$3.45'},
    {name: 'Johnny Marr', points: '$2.56'},
  ],
};

const listitem2 = {
  name: 'Total Points',
  items: [
    {name: 'Nathaniel Fitzgerald', points: '$3.45'},
    {name: 'Lawrence Fullter Fitzgerald', points: '$3.45'},
    {name: 'Jacob Mullins', points: '$3.45'},
    {name: 'Jesus Lewis', points: '$3.45'},
    {name: 'Johnny Marr', points: '$2.56'},
    {name: 'Mullins', points: '$3.45'},
    {name: ' Lewis', points: '$3.45'},
    {name: ' Marr', points: '$2.56'},
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f6',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <List listItems={listitem.items} />
      <List listItems={listitem2.items} />
    </View>
  );
};

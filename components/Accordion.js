import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import List from './List';

const listitem = [
  {
    id: 1,
    name: 'Total Points1',
    items: [
      {name: 'Nathaniel Fitzgerald', points: '$3.45'},
      {name: 'Lawrence Fullter Fitzgerald', points: '$3.45'},
      {name: 'Jacob Mullins', points: '$3.45'},
      {name: 'Jesus Lewis', points: '$3.45'},
      {name: 'Johnny Marr', points: '$2.56'},
    ],
  },
  {
    id: 2,
    name: 'Total Points2',
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
  },
];

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

const Accordion = ({chapters, sections}) => {
  console.log('chapter', chapters);
  console.log('chapter123', sections);
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      {chapters
        ? chapters.map((item, id) => (
            <List items={item} sections={sections} key={id} />
          ))
        : null}
    </View>
  );
};

export default Accordion;

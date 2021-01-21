import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A9CCE3',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#f4f4f6',
    height: 54,
  },
  name: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  pointsContainer: {
    borderRadius: 8,
    backgroundColor: '#44c282',
    padding: 8,
  },
  points: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const ListItem = ({item, isLast}) => {
  const bottomRadius = isLast ? 8 : 0;
  console.log(item);
  return (
    <View style={[styles.container]}>
      <Text style={styles.name}>{item.section_no}.</Text>
      <Text style={styles.name}>{item.section_title}</Text>
      {/* <View style={styles.pointsContainer}>
        <Text style={styles.points}>{item.points}</Text>
      </View> */}
    </View>
  );
};

export default ListItem;

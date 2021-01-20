import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Accordion from './components/Accordion';

const App = () => {
  const [chapters, setChapters] = useState('');
  const api = 'http://compliance.clonestudiobd.com/api/lawchapters';

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setChapters(json))
      .catch((error) => console.error(error));
  }, []);

  console.log('chapters', chapters);
  return (
    <View style={styles.container}>
      <Accordion chapters={chapters} />
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

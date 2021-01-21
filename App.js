import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Accordion from './components/Accordion';

const App = () => {
  const [chapters, setChapters] = useState('');
  const [sections, setSections] = useState('');
  const [isLoading, setLoading] = useState(true);
  const lawChaptersApi = 'http://compliance.clonestudiobd.com/api/lawchapters';

  const chapterSectionsApi =
    'http://compliance.clonestudiobd.com/api/chaptersections';

  useEffect(() => {
    fetch(lawChaptersApi)
      .then((response) => response.json())
      .then((json) => setChapters(json))
      .catch((error) => console.error(error));

    fetch(chapterSectionsApi)
      .then((response) => response.json())
      .then((json) => setSections(json))
      .catch((error) => console.error(error));
  }, [lawChaptersApi, chapterSectionsApi]);

  console.log('chapters-app', chapters);
  console.log('sections-app', sections);
  return (
    <View style={styles.container}>
      {chapters && sections ? (
        <Accordion chapters={chapters} sections={sections} />
      ) : null}
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

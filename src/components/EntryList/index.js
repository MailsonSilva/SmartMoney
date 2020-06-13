import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import EntryListItem from './EntryListItem';
import Container from '../Core/Container/';
import {getEntry} from '../../services/Entries';

const EntryList = ({onEntryPress, onPresActionButton}) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    loadEntries = async () => {
      const data = await getEntry();
      setEntries(data);
    };
    loadEntries();
  }, []);

  return (
    <Container
      title="Últimos Lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPresActionButton={onPresActionButton}>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
            onEntryPress={onEntryPress}
          />
        )}
      />
    </Container>
  );
};

export default EntryList;

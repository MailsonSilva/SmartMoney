import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />

      <EntrySummary onPresActionButton={() => navigation.navigate('Report')} />
      <EntryList
        onEntryPress={(entry) =>
          navigation.navigate('NewEntry', {entry: entry})
        }
          onPresActionButton={() => navigation.navigate('Report')}
      />      
    </View>
  );
};

export default Main;

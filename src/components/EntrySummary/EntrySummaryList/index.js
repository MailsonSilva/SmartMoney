import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';

const EntrySummaryList = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text>{`${item.description} ${item.amount}`}</Text>
        )}
      />
    </View>
  );
};

export default EntrySummaryList;

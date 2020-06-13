import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
};

export default BalancePanelLabel;

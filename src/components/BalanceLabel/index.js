import React from 'react';
import {View, Text} from 'react-native';
import LinearGradiente from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';
import styles from './styles';

const BalanceLabel = () => {
  const currentBalance = 2605.79;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <LinearGradiente
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <Text style={styles.value}>{currentBalance}</Text>
      </LinearGradiente>
    </View>
  );
};

export default BalanceLabel;

import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styels';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import Colors from '../../styles/Colors';

const BalancePanel = ({onNewEntryPress}) => {
  const currentBalance = 2064.69;
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={currentBalance} />
      </LinearGradient>
      <BalancePanelChart />
      <TouchableOpacity style={styles.buttonAdd} onPress={onNewEntryPress}>
        <Icon name="add" size={35} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default BalancePanel;

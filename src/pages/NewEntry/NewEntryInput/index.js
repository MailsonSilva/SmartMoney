import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {TextInputMask} from 'react-native-masked-text';
import Colors from '../../../styles/Colors';

const NewEntryInput = ({value, onChangeDebit, onChangeValue}) => {
  const [debit, setDebit] = useState(value <= 0 ? -1 : 1);
  const [debitPrefix, setDebitPrefix] = useState(value <= 0 ? '-' : '');
  const [colorPrefix, setColorPrefix] = useState(
    value < 0 ? Colors.redDark : Colors.greenDark,
  );

  const onChangeDebitCredit = () => {
    if (debit < 0) {
      setDebit(1);
      setDebitPrefix('');
      onChangeDebit(false);
      setColorPrefix(Colors.greenDark);
    } else {
      setDebit(-1);
      setDebitPrefix('-');
      onChangeDebit(true);
      setColorPrefix(Colors.redDark);
    }
    onChangeValue(value * -1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.debitButton}
        onPress={onChangeDebitCredit}>
        <Text style={[styles.debitButtonPrefix, {color: colorPrefix}]}>
          {debitPrefix}
        </Text>
        <Text style={[styles.debitButtonText, {color: colorPrefix}]}>R$</Text>
      </TouchableOpacity>

      <TextInputMask
        style={styles.maskInput}
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue(rawValue * debit);
        }}
      />
    </View>
  );
};

export default NewEntryInput;

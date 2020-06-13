import React from 'react';
import {View, Button, Picker} from 'react-native';
import styles from './styles';
import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  const currentBalance = 2605.79;
  const entries = [
    {key: '1', description: 'Padaria:', amount: 12},
    {key: '2', description: 'Super Mercado:', amount: 120},
    {key: '3', description: 'Açougue:', amount: 100},
  ];
  const entriesGrouped = [
    {key: '1', description: 'Alimentação:', amount: 200},
    {key: '2', description: 'Combustível:', amount: 50},
    {key: '3', description: 'Aluguel:', amount: 300},
    {key: '4', description: 'Lazer:', amount: 150},
    {key: '5', description: 'Outros:', amount: 100},
  ];
  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <Picker>
          <Picker.Item label={'Todas as categorias'} />
        </Picker>

        <Picker>
          <Picker.Item label={'Últimos 7 dias'} />
        </Picker>
      </View>

      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />

      <View>
        <Button title={'Salvar'} />
        <Button title={'Fechar'} />
      </View>
    </View>
  );
};

export default Report;

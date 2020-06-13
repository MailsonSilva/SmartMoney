import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import styles from './styles';
import BalanceLabel from '../../components/BalanceLabel';
import {saveEntry, deleteEntry} from '../../services/Entries';
import NewEntryInput from '../NewEntry/NewEntryInput';
import NewEntryCategoryPicker from '../NewEntry/NewEntryCategoryPicker';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: '0.00',
    description: '',
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(entry.amount);
  const [description, setDescription] = useState(`${entry.description}`);

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
      description: description,
    };
    saveEntry(data, entry);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <NewEntryInput value={amount} onChangeValue={setAmount} />
        <NewEntryCategoryPicker/>

        <Button title={'Câmera'} />
        <Button title={'GPS'} />
      </View>

      <View>
        <Button
          title={'Adicionar'}
          onPress={() => {
            isValid() && onSave();
          }}
        />
        <Button title={'Excluir'} onPress={onDelete} />
        <Button title={'Cancelar'} onPress={onClose} />
      </View>
    </View>
  );
};

export default NewEntry;

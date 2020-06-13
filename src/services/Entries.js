import {getRealm} from './Realm';
import {Alert} from 'react-native';
import {getUUID} from './UUID';

export const getEntry = async () => {
  const realm = await getRealm();
  const entries = realm.objects('Entry');

  console.log(`getEntry :: entries ${entries}`);
  return entries;
};

export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm();

  let data = {};

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount,
        category: value.category || entry.category,
        entryAt: value.entryAt || entry.entryAt,
        isInit: false,
      };

      realm.create('Entry', data, true);
    });
  } catch (error) {
    console.error(`saveEntry :: error on save object ${JSON.stringify(data)}`);
    Alert.alert('Erro ao salvar o lançamento.');
  }

  return data;
};

export const deleteEntry = async (entry) => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (error) {
    console.error(
      `deleteEntry :: error on delete object ${JSON.stringify(entry)}`,
    );
    Alert.alert('Erro ao excluir o lançamento.');
  }
};

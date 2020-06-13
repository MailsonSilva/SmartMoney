import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Modal, FlatList} from 'react-native';
import styles from './styles';
import {getDebitCategories, getCreditCategories} from '../../../services/Categories';

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);

  useEffect(()=>{
    async function loadCategories(){
      const dataDebit =  await getDebitCategories();
      const dataCredit = await getCreditCategories()
     
      setDebitCategories(dataDebit);
      setCreditCategories(dataCredit);
    }
    loadCategories();
    console.log(`NewEntryCategoryPicker :: loadCategories`);    
  },[]);

  const onCategoryPress = (item) => {
    onChangeCategory(item);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
  <View>
    <TouchableOpacity style={styles.pickerButton} onPress={()=>(
      setModalVisible(true)
    )} >
      <Text style={styles.pickerButtonText} >{category.name}</Text>
    </TouchableOpacity>

    <Modal animationType='slide' transparent={false} visible={modalVisible} >
      <View style={styles.modal}>
        <FlatList 
          data={debit ? debitCategories : creditCategories}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.modalItem} onPress={()=>{onCategoryPress(item)}} >              
              <Text style={[styles.modalItemText, {color: item.color}]} >{item.name}</Text>
            </TouchableOpacity>
          )}
        />    

        <TouchableOpacity 
          style={styles.closeButton}
          onPress={onClosePress} > 
          <Text style={styles.closeButtonText} >Fechar</Text>
        </TouchableOpacity>    

      </View>      
    </Modal>
  </View>);
}

export default NewEntryCategoryPicker;
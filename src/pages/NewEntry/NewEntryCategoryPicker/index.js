import React, { useState } from 'react';
import { View, TouchableOpacity, Text , Modal} from 'react-native';
import styles from './styles';

const NewEntryCategoryPicker = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
  <View>
    <TouchableOpacity style={styles.pickerButton} onPress={()=>(
      setModalVisible(true)
    )} >
      <Text style={styles.pickerButtonText} >Alimentação</Text>
    </TouchableOpacity>
    <Modal animationType='slide' transparent={false} visible={modalVisible} >
      <TouchableOpacity onPress={()=>{
        setModalVisible(false);
      }} > 
        <Text>Fechar</Text>
      </TouchableOpacity>
    </Modal>
  </View>);
}

export default NewEntryCategoryPicker;
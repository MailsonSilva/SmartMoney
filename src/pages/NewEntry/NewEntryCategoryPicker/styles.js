import {StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.background,
  },
  pickerButton: {
    backgroundColor: Colors.asphalt,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
  },
  pickerButtonText: {
    fontSize: 26,
    color: Colors.white,
    textAlign: "center",
  },
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalItem: {
    backgroundColor: Colors.asphalt,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 12,
  },
  modalItemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
  },
  closeButton:{
    borderWidth: 2,
    borderColor: Colors.green,
    backgroundColor: Colors.background,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: Colors.green,   
    paddingHorizontal: 25,
  }
});

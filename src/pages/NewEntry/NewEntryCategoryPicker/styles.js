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
  }
});

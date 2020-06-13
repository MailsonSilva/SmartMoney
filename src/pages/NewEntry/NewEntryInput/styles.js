import {StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.asphalt,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 5,
  },
  debitButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  debitButtonPrefix: {
    marginLeft: 15,
    fontSize: 26,
    minWidth: 8,
    //  color: Colors.white,
  },
  debitButtonText: {
    fontSize: 26,
    //  color: Colors.white,
  },
  maskInput: {
    flex: 1,
    fontSize: 26,
    color: Colors.white,
    textAlign: 'right',
    marginRight: 15,
  },
});

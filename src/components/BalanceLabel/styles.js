import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: Colors.white,
  },
  panel: {
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  value: {
    fontSize: 26,
    color: Colors.white,
  },
});

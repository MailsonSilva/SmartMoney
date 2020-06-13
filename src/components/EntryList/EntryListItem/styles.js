import {StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {},
  description: {
    flex: 1,
  },
  descriptionText: {
    fontSize: 16,
    color: Colors.white,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryText: {
    fontSize: 10,
    marginRight: 20,
    color: Colors.metal,
  },
  entryIcon: {
    color: Colors.metal,
    marginRight: 2,
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    //flex: 1,
  },
  panel: {
    paddingVertical: 10,
    paddingBottom: '20%',
  },
  buttonAdd: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    elevation: 5,
    marginTop: -43,
    marginRight: 15,
    backgroundColor: Colors.green,
  },
});

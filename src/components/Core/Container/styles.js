import {StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

export default StyleSheet.create({
  container: {
    margin: 7,
    borderRadius: 7,
    backgroundColor: Colors.asphalt,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    padding: 8,
  },
  title: {
    fontSize: 20,
    color: Colors.white,
    marginBottom: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionLabel: {
    fontSize: 16,
    color: Colors.white,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: 16,
    color: Colors.white,
    marginRight: 2,
  },
  actionButtonText: {
    fontSize: 16,
    color: Colors.white,
  },
});

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Colors from '../../../styles/Colors';

const EntryListItem = ({entry, isFirstItem, isLastItem, onEntryPress}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeigth = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  const bulletColor = entry.category.color || Colors.white;

  return (
    <TouchableOpacity onPress={() => onEntryPress && onEntryPress(entry)}>
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg height="50" width="30">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="2"
                height={bulletLineHeigth}
                fill={Colors.background}
              />
            )}
            <Circle
              cx="10"
              cy="25"
              r={8}
              stroke={Colors.background}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>{entry.description}</Text>
          <View style={styles.details}>
            <Icon name="access-time" style={styles.entryIcon} />
            <Text style={styles.entryText}>{entry.entryAt.toString()}</Text>
            {entry.address && (
              <>
                <Icon name="person-pin" style={styles.entryIcon} />
                <Text style={styles.entryText}>{entry.address}</Text>
              </>
            )}
          </View>
        </View>

        <View>
          <Text style={styles.amountText}>{entry.amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EntryListItem;

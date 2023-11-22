import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './style';
import {IExtra} from '../../../../../constants/types';

import { colors } from '../../../../../constants/colors';
import Icon from '../../../../../components/Icon';

const ExtraItem = ({item, onPress, isChecked}: {item: IExtra; onPress:(item:IExtra)=>void; isChecked:boolean}) => {

    const _onPress = () => onPress(item)

  return (
    <Pressable onPress={_onPress} style={styles.container}>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          {isChecked &&(
            <View style={styles.iconContainer}>
              <Icon name='check : materialcomm' size={30} color={colors.tortilla}/>

            </View>
          )

          }

        </View>
        <Text style={styles.textOne}>{item?.name}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.textTwo}>+ €{item?.price}</Text>
      </View>
    </Pressable>
  );
};

export default ExtraItem;

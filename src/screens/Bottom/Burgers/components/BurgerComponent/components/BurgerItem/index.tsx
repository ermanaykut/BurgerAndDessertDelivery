import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {IBurger} from '../../../../../../../constants/types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { PAGES } from '../../../../../../pages';

const BurgerItem = ({item}: {item: IBurger}) => {

  const navigation = useNavigation<any>()

  const navToBurgerDetail = () =>{
    navigation.navigate(PAGES.BURGERDETAIL.name, {item})
  }
  return (
    <Pressable onPress={navToBurgerDetail} style={styles.container}>
      <Image source={{uri: item?.images}} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {item.desc}
        </Text>
        <Text style={styles.price}>€{item.price}</Text>
      </View>
    </Pressable>
  );
};

export default BurgerItem;

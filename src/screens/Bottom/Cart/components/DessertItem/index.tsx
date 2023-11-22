import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {PAGES} from '../../../../pages';
import styles from './style';

import {colors} from '../../../../../constants/colors';
import { CartStore } from '../../../../../store';
import Icon from '../../../../../components/Icon';

const DessertItem = ({item}: {item: any}) => {
  const navigation = useNavigation<any>();

  const [count, setCount] = useState<number>(item?.count);

  useEffect(() => {
    if (item?.count !== count) setCount(item?.count);
  }, [item?.count, count]);

  const navToDessertDetail = () => {
    navigation.navigate(PAGES.DESSERTDETAIL.name, {item: item?.item});
  };
  const decreaseCount = () => {
    if (count === 1) {
      CartStore.deleteProduct(item);
    } else {
      setCount(count => --count);
      CartStore.changeCount(item, 'minus');
    }
  };
  const increaseCount = () => {
    setCount(count => ++count);
    CartStore.changeCount(item, 'plus');
  };

  return (
    <Pressable style={styles.container}>
      <Image source={{uri: item?.item?.img}} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.rightTopTextContainer}>
          <Text style={styles.name}>{item?.item?.name}</Text>
          <Text style={styles.description} numberOfLines={1}>
            {item?.item?.description}
          </Text>
        </View>
        <View style={styles.priceAndCount}>
          <Text style={styles.price}>€{(item?.price * count).toFixed(2)}</Text>
          <View style={styles.countContainer}>
            <Pressable
              onPress={decreaseCount}
              style={[
                styles.iconContainer,
                count === 1 && styles.disabledIconContainer,
              ]}>
              <Icon
                name={count === 1 ? 'trash : feather' : "minus : materialcomm"}
                size={18}
                color={colors.white}
              />
            </Pressable>
            <Text style={styles.countText}>{count}</Text>
            <Pressable onPress={increaseCount} style={styles.iconContainer}>
              <Icon name="plus : materialcomm" size={18} color={colors.white} />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default DessertItem;

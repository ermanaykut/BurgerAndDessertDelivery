import {View, Text, Image, Pressable, FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import {EProductType, IBurger, IExtra} from '../../../constants/types';
import styles from './style';

import IngridientItem from './components/IngridientItem';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {BURGEREXTRADATA} from './burgerExtraData';
import ExtraItem from './components/ExtraItem';
import {CartStore} from '../../../store';
import {observer} from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import Icon from '../../../components/Icon';


const BurgerDetail = ({route}: any) => {
  const {item}: {item: IBurger} = route?.params ?? {};
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(item?.price ?? 0);
  const [extra, setExtra] = useState<IExtra[]>([]);

  const navigation = useNavigation<any>()

  useEffect(() => {
    if (extra) {
      let extraPrice: any = 0;
      extra?.map(x => {
        extraPrice += x?.price;
      });
      setPrice(item?.price + extraPrice);
    }
  }, [extra]);

  const productType: EProductType = EProductType.BURGER;

  const decreaseCount = () => {
    setCount(count => --count);
  };
  const increaseCount = () => {
    setCount(count => ++count);
  };

  const renderIngridients = ({item}: {item: IBurger}) => (
    <IngridientItem {...{item}} />
  );

  const onPress = (item: IExtra) => {
    if (extra?.find(x => x.id === item?.id)) {
      let arr = extra.filter(x => x.id !== item?.id);
      setExtra(arr);
    } else {
      setExtra(extra => [...extra, item]);
    }
  };

  const renderExtra = ({item}: {item: IExtra}) => (
    <ExtraItem
      {...{
        item,
        onPress,
        isChecked: extra.find(x => x?.id === item.id) ? true : false,
      }}
    />
  );

  const openExtraAction = () => actionSheetRef.current?.show();

  const addToCart = () => {
    const params = {
      item,
      price,
      extra,
      count,
      productType,
    };
    CartStore.addToCart(params);
    navigation.goBack()
  };

  const calculateTotalExtraPrice = (extra: IExtra[] | undefined): number => {
    if (!extra) {
      return 0;
    }

    return extra.reduce((total, item) => total + (item.price || 0), 0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>

      <Image style={styles.image} source={{uri: item?.images?.[0]?.sm as unknown as string}} />
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.title}>{item?.name}</Text>
          <Text numberOfLines={5} style={styles.description}>
            {item?.desc}
          </Text>
          <Text style={styles.titleIngridients}>Ingridients:</Text>
          <View style={styles.flatContainer}>
            <FlatList
              numColumns={3}
              data={item?.ingredients || []}
              keyExtractor={index => index.toString()}
              renderItem={renderIngridients}
            />
          </View>
          <Pressable onPress={openExtraAction} style={styles.extra}>
            <Text style={styles.actionButtonText}> Add Extra Ingridients</Text>
          </Pressable>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.countContainer}>
            <Pressable
              onPress={decreaseCount}
              disabled={count === 1}
              style={[
                styles.iconContainer,
                count === 1 && styles.disabledIconContainer,
              ]}>
              <Icon name="minus : materialcomm" size={22} />
            </Pressable>
            <Text style={styles.countText}>{count}</Text>
            <Pressable onPress={increaseCount} style={styles.iconContainer}>
              <Icon name="plus : materialcomm" size={22} />
            </Pressable>
          </View>
          <View style={styles.subPriceContainer}>
            <Text style={styles.totalPrice}>
              €
              {(
                (item?.price +
                (extra ? calculateTotalExtraPrice(extra) : 0)) * count
              ).toFixed(2)}
            </Text>
          </View>
          <Pressable onPress={addToCart} style={styles.addToCartContainer}>
            <Text style={styles.addToCartText}>Add To Cart</Text>
          </Pressable>
        </View>
      </View>
      <ActionSheet ref={actionSheetRef} gestureEnabled>
        <View style={styles.actionSheetContainer}>
          <Text style={styles.actionTitle}>Choose Your Extra Ingridients</Text>
          <>
            <FlatList data={BURGEREXTRADATA} renderItem={renderExtra} />
          </>
          <Pressable
            onPress={() => actionSheetRef.current?.hide()}
            style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        </View>
      </ActionSheet>
    </View>
  );
};

export default observer(BurgerDetail);

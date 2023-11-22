import {View, FlatList, Pressable, Text, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {observer} from 'mobx-react';


import DessertItem from './components/DessertItem';
import BurgerItem from './components/BurgerItem';

import {Celebrate} from '../../../components/Loader/Celebrate';

import {CartStore} from '../../../store';
import {PAGES} from '../../pages';
import {EProductType} from '../../../constants/types';
import {colors} from '../../../constants/colors';
import globalStyle from '../../../constants/style';
import styles from './style';
import Icon from '../../../components/Icon';


const Cart = () => {
  const clearAll = () => CartStore.clearAll();

  const navigation = useNavigation<any>();

 

  const burgerToGo = () =>
    navigation.navigate(PAGES.BURGERS.name, {type: true});

  const desertToGo = () =>
    navigation.navigate(PAGES.BURGERS.name, {type: false});

  const renderItem = ({item}: any) => {
    switch (item?.productType) {
      case EProductType.DESSERT:
        return <DessertItem {...{item}} />;
      case EProductType.BURGER:
        return <BurgerItem {...{item}} />;
      default:
        return <></>;
    }
  };

  return (
    <View style={[globalStyle.globalContainer, styles.container]}>
      <View style={{height: '93%'}}>
        <>
          <FlatList data={CartStore.cart} renderItem={renderItem}
 />
        </>
        {CartStore.cartLength <= 0 && (
          <View style={styles.emptyCartContainer}>
            <Celebrate />
            <View style={{marginTop:-800}}>
              <View style={styles.textContainer}>
                <Text style={styles.guiderText}>Your Cart is empty!</Text>
                <Text style={styles.guiderText}>
                  Please click the burger or dessert buttons to add products.
                </Text>
              </View>
              <View style={styles.imageContainer}>
                <Pressable
                  style={styles.burgerIconContainer}
                  onPress={burgerToGo}>
                  <Image
                    source={require('../../../constants/assets/cheeseBurger.png')}
                    style={styles.pizzaImage}
                  />
                </Pressable>
                <Pressable
                  style={styles.cakeIconContainer}
                  onPress={desertToGo}>
                  <Image
                    source={require('../../../constants/assets/cake.png')}
                    style={styles.cakeImage}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </View>
      {CartStore.cartLength > 0 && (
        <View style={styles.bottomContainer}>
          <Pressable onPress={clearAll} style={styles.clearAllButton}>
            <Icon name="trash : feather" size={18} color={colors.white} />
            <Text style={styles.clearAllText}>Clear All</Text>
          </Pressable>
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPriceText}>
              Total: €{Math.max(0,CartStore.total).toFixed(2)}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default observer(Cart);

import { View, Text, Image } from 'react-native'
import React from 'react'
import { IBurger } from '../../../../../constants/types';
import styles from './style';

const IngridientItem = ({item}:{item:IBurger}) => {
  return (
    <View style={styles.IngridientSubContainer}>
    <Text numberOfLines={2} style={styles.ingridientText}>{item.name}</Text>
    <Image
      style={styles.ingridientImg}
      source={{uri: item.img}}
    />
  </View>
  )
}
//<FlatList
//numColumns={3}
//data={item?.ingredients || []}
//keyExtractor={index => index.toString()}
//renderItem={({item}) => (
 // <View style={styles.IngridientSubContainer}>
 //   <Text numberOfLines={2} style={styles.ingridientText}>{item.name}</Text>
 //   <Image
  //    style={styles.ingridientImg}
  //    source={{uri: item.img}}
  //  />
 // </View>
//)}
///>
export default IngridientItem;
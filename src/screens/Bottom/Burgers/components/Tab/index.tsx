import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './style';

const Tab = ({actveIndex, changeActiveIndex}:{actveIndex: boolean, changeActiveIndex: ()=> void}) => {
  return (
    <View style={styles.tabContainer}>
    <Pressable
      onPress={changeActiveIndex}
      style={[
        styles.burgerSubTabContainer,
        actveIndex && styles.burgerActiveSubTabContainer,
      ]}>
      <Text
        style={[styles.subTabText, actveIndex && styles.activesubTabText]}>
        Burgers
      </Text>
    </Pressable>
    <Pressable
      onPress={changeActiveIndex}
      style={[
        styles.dessertSubTabContainer,
        !actveIndex && styles.dessertActiveSubTabContainer,
      ]}>
      <Text
        style={[styles.subTabText, !actveIndex && styles.activesubTabText]}>
        Desserts
      </Text>
    </Pressable>
  </View>
  )
};

export default Tab;

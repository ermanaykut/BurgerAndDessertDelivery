import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import { burgerService } from '../../../../../services';
import { IBurger } from '../../../../../constants/types';
import { BurgerItem } from './components';
import { DATA } from './data';

const BurgerComponent = () => {
  const [burgerList, setBurgerList] = useState<IBurger[]>(DATA)
  useEffect(() => {
    //getBurgers();
    
  }, []);

  const getBurgers = () => {
    burgerService
    .getBurgers()
    .then(res=>{
      setBurgerList(res?.data)

    })
    .catch(err=>{
      console.log(err)
    });
  };

  const renderBurger = ({item}:{item: IBurger}) => <BurgerItem {...{item}} />

  return (
    <View>
      <FlatList data={burgerList} renderItem={renderBurger}/>
    </View>
  );
};

export default BurgerComponent;

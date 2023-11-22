import {View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {BurgerComponent, DessertComponent, Tab} from './components';
import globalStyle from '../../../constants/style';

const Burgers = ({route}:any) => {
  const {type = true} = route?.params ?? {};
  const [actveIndex, setActiveIndex] = useState<boolean>(true);

  useEffect(()=>{
    setActiveIndex(type)
  },[type])

  const changeActiveIndex = () => {
    setActiveIndex(!actveIndex);
  };

  return (
    <View style={globalStyle.globalContainer}>
      <Tab {...{actveIndex, changeActiveIndex}} />
      {actveIndex ? <BurgerComponent/> : <DessertComponent/>}
    </View>
  );
};

export default Burgers;

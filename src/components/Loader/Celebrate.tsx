import React from 'react';
import LottieView from 'lottie-react-native';



export const Celebrate: any = () => {
  return (
    <LottieView
    style={{width: '100%', height: '100%'}}
    source={require('../../constants/assets/Lottie/Celebrate.json')}
    autoPlay
    loop/>
    
  );
};

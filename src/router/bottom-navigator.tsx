import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';
import { Burgers, Cart, Profile } from '../screens';


const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props: any) => <CustomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Burgers"
        component={Burgers}
        options={{title: 'Burgers'}}
        initialParams={{iconName: 'hamburger : matCom'}}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        initialParams={{iconName: 'shoppingcart : ant'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{iconName: 'user : ant'}}
      />
    </Tab.Navigator>
  );
}

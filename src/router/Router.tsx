import {SafeAreaView} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {PAGES} from '../screens/pages';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          {Object.values(PAGES).map(x => {
            return (
              <Stack.Screen
                key={x.name}
                name={x.name}
                component={x.component}
                options={x?.options}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Router;

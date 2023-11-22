import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {Button, Input} from 'custom-components/src';
import globalStyle from '../../../constants/style';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {PAGES} from '../../pages';
import { getItem, setLogin } from '../../../mmkv';

const Login = () => {


  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation<any>();

  const submit = () => {
    if(!username || !password){
      Alert.alert('Attention', 'Please fill the empty places.')
    }
    let users = getItem('users')
    if(users != undefined){
      let isThereUser = users?.find((x:any)=> x?.username === username);
      if(!isThereUser) return Alert.alert('Username not found!')

      users?.map((x:any)=>{
        if(x?.username === username) 
          if(x?.password === password){
          setLogin('loginData', username)
          navigation.navigate(PAGES.BOTTOM.name)

        }else Alert.alert('Password is incorrect!')
      })

    }
  };

  const navigateRegister = () => {
    navigation.navigate(PAGES.REGISTER.name);
  };

  return (
    <View style={[globalStyle.globalContainer, styles.container]}>
      <Text style={styles.title}>Welcome to Quen Burger</Text>
      <Input style={styles.input} label={'Username'} onChangeText={setUsername}/>
      <Input style={styles.input} label={'Password'} onChangeText={setPassword}/>
      <Button
        text="Sign In"
        onPress={submit}
        containerStyle={styles.button}
        textStyle={styles.buttonText}
      />
      <View style={styles.textContainer}>
        <Text style={styles.registerText}>
          Don't you have an account? Go to{' '}
        </Text>
        <TouchableOpacity onPress={navigateRegister}>
          <Text style={styles.registerText2}>Register!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

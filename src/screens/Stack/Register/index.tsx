import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from 'custom-components/src';
import globalStyle from '../../../constants/style';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {PAGES} from '../../pages';
import {getItem, setItem} from '../../../mmkv';

const Register = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isUserUnique, setUserUnique] = useState<boolean>(true);

  const navigation = useNavigation<any>();

  const submit = () => {
    if (!username || !password) {
      return Alert.alert('Attention', 'Please fill the empty places');
    }
    let users = getItem('users') || [];
    
    
    const existingUser = users.find((usersX:any)=> usersX.username === username);
    
    if(existingUser){
      Alert.alert('Warning', 'The username already exist')
      setUserUnique(false)
    } else{
      setUserUnique(true)
      const data = {
        username,
        password,
      };
      users.push(data);
      setItem('users', users);
    }

  };

  const navigateLogin = () => {
    navigation.navigate(PAGES.LOGIN.name);
  };

  return (
    <View style={[globalStyle.globalContainer, styles.container]}>
      <Text style={styles.title}>Welcome to Quen Burger</Text>
      <Text style={styles.title2}>Register to Discover Our Burgers</Text>
      <Input
        style={styles.input}
        label={'Username'}
        onChangeText={setUsername}
      />
      <Input
        style={styles.input}
        label={'Password'}
        onChangeText={setPassword}
      />
      <Button
        text="Sign Up"
        onPress={submit}
        containerStyle={styles.button}
        textStyle={styles.buttonText}
      />
      <View style={styles.textContainer}>
        <Text style={styles.registerText}>
          You have already account? Go to{' '}
        </Text>
        <TouchableOpacity onPress={navigateLogin}>
          <Text style={styles.registerText2}>Login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

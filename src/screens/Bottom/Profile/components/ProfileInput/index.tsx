import {View, Text, Alert, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import {AddressStore} from '../../../../../store';
import {IAddress} from '../../../../../constants/types';
import {ActionSheetRef} from 'react-native-actions-sheet';
import {colors} from '../../../../../constants/colors';
import styles from './style';
import {Button, Input} from 'custom-components/src';
import Icon from '../../../../../components/Icon';

const ProfileInput = () => {
  const addressActionRef = useRef<ActionSheetRef>(null);

  const [isActionHide, SetIsActionHide] = useState<boolean>(true);

  const hideActionSheet = () => {
    addressActionRef?.current?.hide();
    SetIsActionHide(true);
  };

  const [addressInfo, setAddressInfo] = useState<IAddress>({
    addressName: '',
    name: '',
    familyName: '',
    streetName: '',
    buildingNumber: undefined,
    flatNumber: undefined,
    floorNumber: undefined,
    countyName: '',
    cityName: '',
    defaultAddress: false,
  });
  const submitAddress = async () => {
    try {
      const isThereName = await AddressStore.control(addressInfo.addressName);

      if (isThereName) {
        Alert.alert(
          'Address Name already exists!',
          'Try an unused address name, please.',
        );
      } else {
        AddressStore.addToAdress(addressInfo);
        hideActionSheet();
        setAddressInfo(prevInfo => ({...prevInfo, defaultAddress: false}));
      }
    } catch (error) {
      console.error('Error checking address name:', error);
    }
  };

  const checkBoxPress = () => {
    setAddressInfo(prevInfo => ({
      ...prevInfo,
      defaultAddress: !prevInfo.defaultAddress,
    }));
  };

  return (
    <View style={styles.actionSheetContainer}>
      <View>
        <View style={styles.addressContainer}>
          <Input
            label={'Address Name'}
            onChangeText={(text: string) =>
              setAddressInfo({...addressInfo, addressName: text})
            }
            placeholder="Work, home etc.."
            textColor={colors.tortilla}
            outlineColor={colors.brown}
            activeOutlineColor={colors.tortilla}
            style={{width: '100%'}}
          />
        </View>
        <View style={styles.nameContainer}>
          <Input
            label={'Name'}
            onChangeText={(text: any) =>
              setAddressInfo({...addressInfo, name: text})
            }
            placeholder="Please Enter Your Name"
            textColor={colors.tortilla}
            outlineColor={colors.brown}
            activeOutlineColor={colors.tortilla}
            style={{
              width: '47.5%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          />
          <Input
            label={'Family Name'}
            onChangeText={(text: any) =>
              setAddressInfo({...addressInfo, familyName: text})
            }
            placeholder="Please Enter Related Address Name"
            textColor={colors.tortilla}
            outlineColor={colors.brown}
            activeOutlineColor={colors.tortilla}
            style={{
              width: '47.5%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          />
        </View>
        <View style={styles.streetContainer}>
          <Input
            label={'Street Name'}
            onChangeText={(text: any) =>
              setAddressInfo({...addressInfo, streetName: text})
            }
            placeholder="Please Enter Street Name"
            textColor={colors.tortilla}
            outlineColor={colors.brown}
            activeOutlineColor={colors.tortilla}
          />
        </View>
        <View style={styles.numberContainer}>
          <Input
            label={'Building No'}
            onChangeText={(text: any) =>
              setAddressInfo({...addressInfo, buildingNumber: text})
            }
            placeholder="Building No "
            textColor={colors.tortilla}
            outlineColor={colors.brown}
            activeOutlineColor={colors.tortilla}
            style={{
              width: '30%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          />
          <Input
            label={'Flat No'}
            onChangeText={(text: any) =>
              setAddressInfo({...addressInfo, flatNumber: text})
            }
            placeholder="Flat No "
            textColor={colors.tortilla}
            outlineColor={colors.brown}
            activeOutlineColor={colors.tortilla}
            style={{
              width: '30%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          />
          <Input
            label={'Floor No'}
            onChangeText={(text: any) =>
              setAddressInfo({...addressInfo, floorNumber: text})
            }
            placeholder="Floor No "
            textColor={colors.tortilla}
            outlineColor={colors.brown}
            activeOutlineColor={colors.tortilla}
            style={{
              width: '30%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          />
        </View>
        <View style={styles.cityContainer}>
          <Input
            label={'County Name'}
            onChangeText={(text: any) =>
              setAddressInfo({...addressInfo, countyName: text})
            }
            placeholder="Please Enter County Name"
            textColor={colors.tortilla}
            outlineColor={colors.brown}
            activeOutlineColor={colors.tortilla}
            style={{
              width: '47.5%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          />
          <Input
            label={'City Name'}
            onChangeText={(text: any) =>
              setAddressInfo({...addressInfo, cityName: text})
            }
            placeholder="Please Enter City Name"
            textColor={colors.tortilla}
            outlineColor={colors.brown}
            activeOutlineColor={colors.tortilla}
            style={{
              width: '47.5%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={submitAddress}
          text="Save"
          textStyle={{color: colors.tortilla}}
          containerStyle={{
            width: '40%',
            height: 40,
            borderColor: colors.tortilla,
          }}
        />
        <View style={styles.defaultTextContainer}>
          <Text style={styles.defaultText}>Save As A Default?</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <Pressable onPress={checkBoxPress} style={styles.checkBox}>
            {addressInfo.defaultAddress && (
              <Icon
                name="check : materialcomm"
                size={60}
                style={styles.checkIcon}
              />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ProfileInput);

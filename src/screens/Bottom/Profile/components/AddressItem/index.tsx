import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IAddress} from '../../../../../constants/types';
import styles from './style';
import Icon from '../../../../../components/Icon';



const AddressItem = ({item, onDelete, onEdit}: {item: IAddress; onDelete:(address:IAddress)=>void; onEdit:(address:IAddress)=>void}) => {

  const deleteData = ()=>{
    onDelete(item)
  }

  const editData = () =>{
    onEdit(item)
  }

  return (
    <View style={styles.container}>
      <View style={styles.allTextContainer}>
        <View style={styles.addressNameContainer}>
          <Text style={styles.addressTitle}>{item?.addressName}</Text>
        </View>
        <Text>
        <Text style={styles.subTitleText}>Contact Person: </Text>{item?.name} {item?.familyName}
        </Text>
        <View>
          <View>
            <Text><Text style={styles.subTitleText}>Street Name: </Text>{item?.streetName}</Text>
            <Text><Text style={styles.subTitleText}>Building Number: </Text>{item?.buildingNumber}</Text>
            <Text><Text style={styles.subTitleText}>Flat Number: </Text>{item?.flatNumber}</Text>
            <Text><Text style={styles.subTitleText}>Floor Number: </Text>{item?.floorNumber}</Text>
            <Text><Text style={styles.subTitleText}>County Name: </Text>{item?.countyName}</Text>
            <Text><Text style={styles.subTitleText}>City Name: </Text>{item?.cityName}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={editData} style={styles.editContainer}>
          <Icon name="pencil-outline : materialcomm" size={20} />
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteData} style={styles.deleteContainer}>
          <Icon name="trash-can-outline : materialcomm" size={18} />
          <Text style={styles.editText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressItem;

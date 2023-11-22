import React from 'react';
import type { ViewStyle } from 'react-native';



import type { IconTypes } from './types';
import DefaultIcon from './iconHandler';

export interface IconProps {
  name: IconTypes;
  type?:
    | 'ant'
    | 'entypo'
    | 'evil'
    | 'feather'
    | 'font'
    | 'font5'
    | 'font5pro'
    | 'fontisto'
    | 'foundation'
    | 'ion'
    | 'materialcomm'
    | 'material'
    | 'octo'
    | 'tabler';
  size: number;
  style?: ViewStyle | any;
  color?: string;
}

export default function Icon({ ...props }: IconProps): React.ReactElement {
  let { name, size = 14, color, type, style } = props;

  if (name.includes(':')) {
    let arr: any = name.split(':');
    name = arr[0].trim();
    type = arr[1].trim();
  }

  let module = '';

  switch (type) {
    case 'ant':
      module = 'AntDesign';
      break;
    case 'entypo':
      module = 'Entypo';
      break;
    case 'evil':
      module = 'EvilIcons';
      break;
    case 'feather':
      module = 'Feather';
      break;
    case 'font':
      module = 'FontAwesome';
      break;
    case 'font5':
      module = 'FontAwesome5';
      break;
    case 'font5pro':
      module = 'FontAwesome5Pro';
      break;
    case 'fontisto':
      module = 'Fontisto';
      break;
    case 'foundation':
      module = 'Foundation';
      break;
    case 'ion':
      module = 'Ionicons';
      break;
    case 'materialcomm':
      module = 'MaterialCommunityIcons';
      break;
    case 'material':
      module = 'MaterialIcons';
      break;
    case 'octo':
      module = 'Octicons';
      break;
    case 'tabler':
      module = 'Tabler';
      break;
    default:
      module = 'MaterialCommunityIcons';
      break;
  }
  return (
    <DefaultIcon
      module={module}
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
}

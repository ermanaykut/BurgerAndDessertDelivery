import * as React from 'react';

export type IconProps =
  | {
      name: string;
      color?: string;
      size: number;
      direction: 'rtl' | 'ltr';
      allowFontScaling?: boolean;
      module?: any;
    }
  | any;

let Icon: any;

const DefaultIcon = ({
  name,
  color = 'black',
  size,
  module,
  style,
}: IconProps) => {
  try {
    // Optionally require vector-icons
    // Icon = require(path.join('react-native-vector-icons', module)).default;
    switch (module) {
      case 'AntDesign':
        Icon = require('react-native-vector-icons/AntDesign').default;
        break;
      case 'Entypo':
        Icon = require('react-native-vector-icons/Entypo').default;

        break;
      case 'EvilIcons':
        Icon = require('react-native-vector-icons/EvilIcons').default;

        break;
      case 'Feather':
        Icon = require('react-native-vector-icons/Feather').default;

        break;
      case 'FontAwesome':
        Icon = require('react-native-vector-icons/FontAwesome').default;

        break;
      case 'FontAwesome5':
        Icon = require('react-native-vector-icons/FontAwesome5').default;

        break;
      case 'FontAwesome5Pro':
        Icon = require('react-native-vector-icons/FontAwesome5Pro').default;

        break;
      case 'Fontisto':
        Icon = require('react-native-vector-icons/Fontisto').default;

        break;
      case 'Foundation':
        Icon = require('react-native-vector-icons/Foundation').default;

        break;
      case 'Ionicons':
        Icon = require('react-native-vector-icons/Ionicons').default;

        break;
      case 'MaterialCommunityIcons':
        Icon =
          require('react-native-vector-icons/MaterialCommunityIcons').default;

        break;
      case 'MaterialIcons':
        Icon = require('react-native-vector-icons/MaterialIcons').default;

        break;
      case 'Octicons':
        Icon = require('react-native-vector-icons/Octicons').default;

        break;
      default:
        Icon =
          require('react-native-vector-icons/MaterialCommunityIcons').default;
        break;
    }
    Icon.loadFont();
  } catch (e) {
    let isErrorLogged = false;

    // Fallback component for icons
    Icon = ({ name }: any) => {
      /* eslint-disable no-console */
      if (!isErrorLogged) {
        if (
          !/(Cannot find module|Module not found|Cannot resolve module)/.test(
            (e as any).message
          )
        ) {
          console.error(e);
        }

        console.warn(
          `Tried to use the icon '${name}' in a component from 'react-native-paper', but 'react-native-vector-icons/MaterialCommunityIcons' could not be loaded.`,
          `To remove this warning, try installing 'react-native-vector-icons' or use another method to specify icon: https://callstack.github.io/react-native-paper/icons.html.`
        );

        isErrorLogged = true;
      }

      return null;
    };
  }

  return <Icon name={name} color={color} size={size} style={style} />;
};

export default DefaultIcon;

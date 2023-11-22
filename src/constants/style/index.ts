import {StyleSheet} from 'react-native';
import {colors} from '../colors';

const PAGE_PADDING = 16;
const globalStyle = StyleSheet.create({
  globalContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: PAGE_PADDING,
  },
  midShadow: {
    shadowColor: colors.tortilla,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  darkShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default globalStyle;
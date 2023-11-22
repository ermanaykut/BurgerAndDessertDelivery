import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  image: {
    width: '100%',
    height: 350,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.babypink,
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.darkgrey,
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  priceContainer: {
    width: '100%',
    height: 60,
    backgroundColor: colors.babypink,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '30%',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 6,
  },
  iconContainer: {
    backgroundColor: colors.white,
    borderRadius: 100,
  },
  disabledIconContainer: {
    backgroundColor: colors.white + 80,
  },
  countText: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
  },
  subPriceContainer: {
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    width: '25%',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.white,
    backgroundColor: colors.babypink,
  },
  addToCartContainer: {
    backgroundColor: colors.border,
    shadowOpacity: 1,
    shadowColor: colors.black + 95,
    borderRadius: 6,
  },
  addToCartText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.babypink,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

export default styles;

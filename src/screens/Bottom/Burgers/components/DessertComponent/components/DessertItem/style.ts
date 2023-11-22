import {StyleSheet} from 'react-native';
import {colors} from '../../../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightContainer: {
    width: '75%',
    height: 70,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 4,
  },
  name: {
    color: colors.babypink,
    fontWeight:'600'

  },
  description: {
    color: colors.grey,
    fontSize: 12,
  },
  price: {
    color: colors.babypink,
    fontWeight:'700',
    fontSize: 16,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
});

export default styles;

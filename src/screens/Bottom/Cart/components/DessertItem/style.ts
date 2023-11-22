import {StyleSheet} from 'react-native';
import {colors} from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical:8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  rightContainer: {
    width: '75%',
    height:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  rightTopTextContainer: {
    width: '50%',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 4,
  },
  name: {
    color: colors.tortilla,
    fontWeight: '600',
  },
  description: {
    color: colors.grey,
    fontSize: 12,
  },
  extraText:{
    color:colors.tortilla,
    fontSize:14,
  },
  priceAndCount:{
    alignItems:'center',
    justifyContent:'space-between',
    width:'35%',
    
  },
  price: {
    color: colors.tortilla,
    fontWeight: '600',
    fontSize: 20,
    marginBottom:7

  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width:'100%',
    marginTop:7

  },
  iconContainer: {
    backgroundColor: colors.tortilla,
    borderRadius: 100,
    padding: 3,
  },
  disabledIconContainer: {
    backgroundColor: colors.tortilla + 80,
  },
  countText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.tortilla
  },
});

export default styles;

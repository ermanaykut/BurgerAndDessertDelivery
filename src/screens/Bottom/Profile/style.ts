import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondContainer: {
    height: height * 0.7,
    marginBottom: 20,
  },
  userContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.tortilla,
    marginBottom: 5,
  },
  username: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.tortilla,
  },
  subTitleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.tortilla,
  },
  flatContainer: {
    paddingVertical: 5,
  },
  thirdContainer: {
    height: height * 0.7,
    justifyContent: 'center',
  },
  text2: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.tortilla,
    marginTop: 20,
  },
  thirdUserContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    width: '50%',
    height: 40,
    backgroundColor: colors.white,
    shadowOpacity: 1,
    shadowColor: colors.tortilla,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.tortilla,
  },
  actionSheetContainer: {
    height: 400,
    padding: 20,
    paddingBottom: 30,
    backgroundColor: colors.white,
  },
  addressContainer: {
    marginBottom: 5,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  streetContainer: {
    marginVertical: 5,
  },

  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  cityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15
  },
  defaultTextContainer: {
    height: 40,
    width: '45%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  defaultText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.tortilla,
  },
  checkBoxContainer: {
    borderWidth: 1.2,
    borderColor: colors.tortilla,
    borderRadius: 6,
    width: 35,
    height: 35,
    backgroundColor: colors.white,
  },
  checkBox: {
    width: 50,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    position: 'absolute',
    left: -7,
    top: -20,
    color: colors.tortilla,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {colors} from '../../../../../constants/colors';

const styles = StyleSheet.create({
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
    marginTop: 15,
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

import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
  },
  button: {
    height: 42,
    backgroundColor: colors.tortilla,
    marginTop:20,
  },

  title:{
    color: colors.tortilla,
    fontSize:16,
    fontWeight:'500',
    marginBottom:8,
  },
  title2:{
    color: colors.tortilla,
    fontSize:16,
    fontWeight:'500',
    marginBottom:40,
  },
  buttonText:{
    color: colors.white,
    fontSize:16,
  },
  textContainer:{
    flexDirection:'row',
  },
  registerText:{
    color: colors.tortilla,
    marginTop: 20,
    fontSize:16,
    fontWeight:'300',
  },
  registerText2:{
    color: colors.tortilla,
    fontWeight:'700',
    marginTop: 20,
    fontSize:16,
  },


});

export default styles;

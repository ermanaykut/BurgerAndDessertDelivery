import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../../constants/colors";

const {width} = Dimensions.get('screen')
const styles = StyleSheet.create({

    container:{
        width:'100%',
        height:90,
    },

    IngridientSubContainer:{
      paddingHorizontal:15,
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal: 5,
      width: width*.25,
      height: width*.30, 
    },
    ingridientText:{
      fontSize:14,
      color:colors.tortilla,
      fontWeight:'500',
    },
    ingridientImg:{
      width:80,
      height:80
    },
})

export default styles;
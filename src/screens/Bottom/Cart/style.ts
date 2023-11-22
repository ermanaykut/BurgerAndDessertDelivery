import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const {height} = Dimensions.get('screen')

const styles = StyleSheet.create({

    container:{
        justifyContent:'space-between',
    },
    clearAllButton:{
        backgroundColor:colors.tortilla,
        width:'30%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:100,
        shadowOpacity:0.8,
    },
    clearAllText:{
        fontSize:14,
        color:colors.white
    },
    bottomContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    totalPriceContainer:{
        backgroundColor:colors.tortilla,
        width:'30%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:100,
        shadowOpacity:0.8,
    },
    totalPriceText:{
        fontSize:14,
        color:colors.white,
        fontWeight:'600'
    },
      emptyCartContainer: {
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      guiderText: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        color:colors.tortilla
      },
      imageContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 15,
      },
      burgerIconContainer:{
        backgroundColor:colors.lemon,
        shadowOpacity:0.8,
        padding:10,
        borderRadius:100
      },
      cakeIconContainer:{
        backgroundColor:colors.babypink,
        shadowOpacity:0.8,
        padding:10,
        borderRadius:100
      },
      pizzaImage: {
        width: 60,
        height: 60,
      },
      cakeImage: {
        width: 60,
        height: 60,
      },
    


})

export default styles;
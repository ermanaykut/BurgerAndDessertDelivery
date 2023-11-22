import { StyleSheet } from "react-native";
import { colors } from "../../../../../constants/colors";



const styles = StyleSheet.create({

    container:{

        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:8,
        paddingTop:8,
        paddingBottom:2,
        marginBottom:5,
        borderBottomWidth:1,
        borderBlockColor: colors.tortilla

        
    },
    textOne:{
        fontSize:18,
        color: colors.tortilla
    },
    priceContainer:{

        width: '20%'
    },
    textTwo:{
        fontSize:16,
        color: colors.tortilla,
        fontWeight:'600'
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.tortilla,
        marginRight: 12,
      },
      iconContainer: {
        position: 'absolute',
        top: -10,
        width: 30,
        height: 30,
        right: -12,
      },

})

export default styles
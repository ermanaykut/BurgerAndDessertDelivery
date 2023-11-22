import { StyleSheet } from "react-native";
import { colors } from "../../../../../constants/colors";


const styles = StyleSheet.create({

    tabContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20,
    },
    burgerSubTabContainer:{
        width:'48%',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        paddingHorizontal:12,
        borderRadius:8,
        backgroundColor:colors.tortilla +40
    },
    burgerActiveSubTabContainer:{
        backgroundColor: colors.tortilla,
    },
    dessertSubTabContainer:{
        width:'48%',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        paddingHorizontal:12,
        borderRadius:8,
        backgroundColor:colors.babypink +50
    },
    dessertActiveSubTabContainer:{
        backgroundColor: colors.babypink,
    },
    subTabText:{
        fontSize:16,
    },
    activesubTabText:{
        color: colors.white
    }

})

export default styles;
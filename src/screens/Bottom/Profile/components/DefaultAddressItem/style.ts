import { StyleSheet } from "react-native";
import { colors } from "../../../../../constants/colors";

const styles = StyleSheet.create({

    container:{
        flex:1,
        marginHorizontal:10,
        paddingHorizontal:15,
        paddingVertical:10,
        flexDirection:'row',
        borderWidth:1,
        borderColor:colors.tortilla+80,
        borderRadius:6,
        marginBottom:10,
        marginTop:10,
        backgroundColor:colors.tortilla+20
    },
    allTextContainer:{
        width:'70%'
    },
    addressNameContainer:{

    },
    addressTitle:{
        fontSize:16,
        fontWeight:'600'
    },
    subTitleText:{
        fontWeight:'500'
    },
    buttonsContainer:{
        width:'30%',
        justifyContent:'space-around',
        alignItems:'center',
    },
    editContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:3,
        borderColor:colors.tortilla,
        backgroundColor:colors.white,
        shadowOpacity:1,
        shadowColor:colors.tortilla,
        width:'80%',
        height:30,

    },
    editText:{
        marginLeft:5
    },
    deleteContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:3,
        borderColor:colors.darkred,
        backgroundColor:colors.white,
        shadowOpacity:1,
        shadowColor:colors.darkred,
        width:'80%',
        height:30,

    },


})

export default styles;
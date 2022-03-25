import React from "react";
import { Text , View ,StyleSheet} from "react-native"
import Card from "./Card";
const SalahCard = props=>{
    return(
        <Card CardStyle ={{...styles.card,...props.SalahCardStyle }}>
            <Text style = {styles.title} >{props.title}</Text>
            <Text style={styles.info}>{props.time}{props.hijri}</Text>
        </Card>
    );
}
const styles = StyleSheet.create({
    card :{
        height :100 ,
        backgroundColor:"white", 
        alignItems :"center" ,
        justifyContent :"center",
        alignSelf:"center", 
        borderRadius : 25
    },
    title :{
        color : "#3ad197" ,
        fontSize : 18 ,
        fontFamily:"Tajawal-Bold"
    },
    info :{
        color : "black" ,
        fontSize : 18 ,
        fontFamily:"Tajawal-Black"
    }
})
export default SalahCard
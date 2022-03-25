import React from 'react' ;
import {Text , StyleSheet , View ,TouchableOpacity}  from "react-native" ;
const Header = props =>{
    return (
        <View style={styles.header}>
            <View StylE={styles.headerTitleContainer}>
                <Text style={{color:"#1C8D2F" , fontSize:24  , fontFamily:"Roboto-Bold"}}>ISLAMY</Text>
            </View>
            <View>
                <Text style={{color:"black" , fontSize:24 , fontFamily:"Roboto-Bold"}}>.Live</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header :{
        height :45 ,
        width: "100%",
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
    }, 
    headerTitleContainer :{
        flex:1,
        flexDirection:"row",

    }
})
export default Header;
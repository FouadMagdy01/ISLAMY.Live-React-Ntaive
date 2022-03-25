import React from "react";
import { Text , View , StyleSheet  } from "react-native";
const Card = props =>{
    return(
        <View style={{...styles.shadow, ...props.CardStyle}}
        > 
        {props.children}
        </View>
    );
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5 ,
    }
})
export default Card
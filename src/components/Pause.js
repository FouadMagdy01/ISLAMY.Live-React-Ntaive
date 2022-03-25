import React from "react"
import { Text,TouchableOpacity , View , StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

const PlayPause =props =>{
    return(
        <TouchableOpacity style={{alignItems :"center" ,
        justifyContent:"center",
        backgroundColor:"#F8F8F8",
        width:35,
        height:35,
        borderRadius:35/2,
        alignSelf:"center",
        marginRight:10

        }} 
        onPress={props.buttonPressed}>
            <View>
              <Icon name={props.icon} size={18} color ="#3ad197"/>
            </View>
          </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

})
export default PlayPause
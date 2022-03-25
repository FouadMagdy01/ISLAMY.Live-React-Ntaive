import React, { useEffect , useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    
} from 'react-native';
import api from '../services/api';
import Card from '../src/components/Card';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import { animatedColors } from "../src/animatedColors";

import LinearGradient , {presetColors} from "react-native-animated-linear-gradient"
const Quran = ({props , navigation}) => {

    return (
        <LinearGradient
        customColors ={animatedColors.custom}

        >
            <View style={styles.container}>
            <Text style={{
                fontSize:24 ,
                fontWeight:"bold" ,
                color:"white",
                marginTop:50
            }}>اختر الطريقة المناسبة</Text>
            <Card CardStyle={{ marginTop:40 , width:"80%" , height :220 , backgroundColor:"white" , borderRadius:20,}} >
            <TouchableOpacity 
            style={{ height :"100%"  , overflow:"hidden" , borderRadius:20 , width:"100%" , flexDirection:"row-reverse" , alignItems:"center"}}
            onPress={()=> navigation.navigate("Listen")}>
                <Icon3 name='headphones' size={150} style={{ color:"#404040" , opacity:0.1 , marginLeft:25 , transform:[{translateX:10}]}}/>
                <Text style={{fontSize:25 , color:"#457A4B" , fontFamily : "Tajawal-Bold"}}>استماع</Text>
                </TouchableOpacity>       
            </Card>
            <Card CardStyle={{ marginTop:40 , width:"80%" , height :220 , backgroundColor:"white" , borderRadius:20, overflow:"hidden"}} >
            <TouchableOpacity
            onPress={() => navigation.navigate('Read')}
            style={{backgroundColor:"white",flexDirection : "row" , height :"100%" , alignItems:"center" , overflow:"hidden" , borderRadius:20}}>
                <Icon3 name='book-open' size={150} style={{ color:"#404040" , opacity:0.1 , transform:[{translateX:-10}] , marginRight:25}}/>
                <Text style={{fontSize:25 , color:"#457A4B" , fontFamily :"Tajawal-Bold"}}>قراءة </Text>
                </TouchableOpacity>
            </Card>      
            </View>
 
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
         alignItems:"center" ,
         
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Quran;
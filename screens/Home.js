import React ,{useEffect , useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';
import FirstCard from '../src/Home Cards/FirstCard';
import SecondCard from '../src/Home Cards/SecondCard';
import ThirdCard from '../src/Home Cards/ThirdCard';
import { animatedColors } from "../src/animatedColors";

import LinearGradient , {presetColors} from "react-native-animated-linear-gradient"
const Home = ({ navigation }) => {

    return (
        <LinearGradient
        customColors={animatedColors.custom}

        >
          <ScrollView style={{flex:1}}>
            <View style={{marginBottom:160}}>
            <FirstCard/>
          <View>
            <Text style={{fontSize : 24 , alignSelf:"center" , color:"white" , marginTop:30 , fontFamily :"Tajawal-Black"}}> اختصارات سريعه</Text>
          </View>
          <SecondCard 
          onPress={()=> navigation.navigate("Listen")}
          /> 
          <ThirdCard 
          onPress= {() => navigation.navigate('Ramadan')}
          />      
            </View>
   
            </ScrollView>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

})

export default Home;
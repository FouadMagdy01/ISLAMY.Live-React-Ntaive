import React, { useEffect , useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
    
} from 'react-native';
import api from '../services/api';
import Card from '../src/components/Card';
import LinearGradient , {presetColors} from "react-native-animated-linear-gradient"
import { recitersList } from '../src/Reciters';
import { animatedColors } from "../src/animatedColors";

const Listen = ({ navigation,props}) => {

    const [reciters,setReciters] =useState(recitersList)
    return (
        <LinearGradient  
        customColors ={animatedColors.custom}
        >
            <View
            style={styles.container}
            >
                <View style={{width:"90%" , alignSelf:"center" , height:"100%"}}> 
            <View style={{alignItems:"center" , marginVertical:"5%" }}>
            <Text style={{fontSize:25,color:"white" , fontFamily :"Tajawal-Black" }}>
                اختر شيخك المفضل
            </Text>
            </View >
            <FlatList 
            style={{}}
            keyExtractor={(item)=> item.id}
          data={reciters}
          renderItem={(reciters) =>{
            return(
                <Card
                CardStyle={{ width:"100%" , height :130 , backgroundColor: "white"  , borderRadius:20, marginHorizontal :0 , marginBottom:50 , justifyContent :"center" , marginTop : 0}}>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate("Surah" , {id: reciters.item.id , reciterName : reciters.item.reciter_name , Sname :reciters.item.Sname})}
                    style={{width:"100%" , height :"100%", alignItems:"center" , justifyContent:"center" }}>
                        <View style={{alignItems:"center"  , justifyContent :"center"}}>
                        <Text style={{fontSize:16 , color:"#3ad197" , alignSelf :"center" , fontFamily:"Tajawal-Bold"}}>
                        {reciters.item.translated_name.name} 
                       </Text>
                        <Text style={{fontSize:16 , color:"black" , alignSelf :"center" , fontFamily :"Roboto-Bold"}}>
                        {reciters.item.reciter_name} 
                       </Text>
                        </View>
                    </TouchableOpacity>
                </Card>
            );
          }}
          />
                </View>

            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default Listen;
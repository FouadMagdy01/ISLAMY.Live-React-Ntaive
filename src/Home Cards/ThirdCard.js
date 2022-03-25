import Card from "../components/Card"
import React from "react" 
import { Text , StyleSheet , View  , Image, TouchableOpacity } from "react-native"
import Icon3 from 'react-native-vector-icons/FontAwesome5';
const ThirdCard = props =>{
return(
    <Card CardStyle={{ marginTop:30 , width:"80%" , height :220 , backgroundColor:"white" , marginHorizontal:40 , borderRadius:20,  }}>
        <TouchableOpacity
        onPress={props.onPress}
        style={{height:"100%" , width : "100%" , justifyContent :"center" }} >
            <View style={{flexDirection:"row-reverse" , width:"100%" }}>
                <View>
                    <Text style={{fontSize:13 , color:"#3ad197" ,  right:10 , fontFamily:"Tajawal-Bold"}}>رمضان 2022</Text>
                        <View style={{flexDirection:"row-reverse" , right:"0%" }}>
                            <Text style={{fontSize:13 ,  color:"#3ad197" , fontFamily:"Tajawal-Bold" , right:-10}}>الامساكية</Text>
                            <Text style={{fontSize:13 ,  color:"black" , fontFamily :"Tajawal-Black" , right:-10}}> واحاديث وأدعية </Text>
                        </View>
                </View>
            </View>
        </TouchableOpacity>
        <Image
      source={require("../../assets/images/ramadan.png")}  style={{ width :120 , height:240,  left:"0%"  , position:"absolute" , bottom:"10%"  , bottom:-10 }}/>
    </Card>

);    
}

const styles = StyleSheet.create({

})
export default ThirdCard


import Card from "../components/Card"
import React from "react" 
import { Text , StyleSheet , View  , Image, TouchableOpacity} from "react-native"
import Icon3 from 'react-native-vector-icons/FontAwesome5';
const SecondCard = props =>{
return(
    <Card CardStyle={{ marginTop:30 , width:"80%" , height :220 , backgroundColor:"white" , marginHorizontal:40 , borderRadius:20,   }}>
        <TouchableOpacity
        onPress={props.onPress}
        style={{ overflow:"hidden" , height:"100%" , width : "100%" , flexDirection:"row-reverse" }} >
            <View style={{width:"100%" , height :"100%" , justifyContent:"center" , }}>
            <Icon3 name="quran" size={160} style={{color:"#404040" , transform:[{rotate: "-10deg"}], opacity:0.1 , position:"absolute" , right : 0 }}/>
                <View style={{marginRight:"40%"}}>
                    <View style={{flexDirection:"row-reverse" , maxWidth:"100%"}}>
                    <Text style={{fontSize:13 , color:"black" , fontFamily :"Tajawal-Black"}}>استمع الي </Text>
                    <Text style={{fontSize:13 , color:"#3ad197" , fontFamily:"Tajawal-Bold"}}>القرأن </Text>
                     <Text style={{fontSize:13 , color:"black" , fontFamily :"Tajawal-Black"}}>بصوت</Text>
                    </View>
                    <View style={{flexDirection:"row-reverse" , maxWidth:"100%"}}>
                    <Text style={{fontSize:14 , color:"#3ad197" , fontFamily:"Tajawal-Bold"}}>شيخك </Text>
                <Text style={{fontSize:14 ,  color:"black" , fontFamily :"Tajawal-Black"}}>المفضل</Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>

    </Card>
);    
}

const styles = StyleSheet.create({

})
export default SecondCard
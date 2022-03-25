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
                <Icon3 name="quran" size={40} style={{position :"absolute"  ,  right:0}} />
            <Text style={{marginLeft:80}} ></Text>

            </View>
            </TouchableOpacity>

    </Card>
);    
}

const styles = StyleSheet.create({

})
export default SecondCard

import Card from "../components/Card"
import React from "react" 
import { Text , StyleSheet , View  , Image, TouchableOpacity} from "react-native"
import Icon3 from 'react-native-vector-icons/FontAwesome5';
const SecondCard = props =>{
return(
    <Card CardStyle={{ marginTop:30 , width:"80%" , height :220 , backgroundColor:"white" , marginHorizontal:40 , borderRadius:20,   }}>
        <TouchableOpacity
        onPress={props.onPress}
        style={{ overflow:"hidden" ,flexDirection:"row-reverse" ,alignSelf:"center" , height:"100%" , width : "100%" }} >
        <View style={{alignSelf:"center" , marginLeft:15 }}>
            <Icon3 name="quran" size={160} style={{color:"#404040" , transform:[{rotate: "-10deg"}], opacity:0.1 , alignSelf:"center" ,  }}/>
        </View>
            <View style={{flexDirection:"column" , alignSelf:"center"}}> 
                <View style={{ flexDirection:"row-reverse"}}>
                    <Text style={{fontSize:14 , fontWeight:"bold" , color:"black" , fontFamily :"Tajawal-Black"}}>استمع الي </Text>
                    <Text style={{fontSize:14 , fontWeight:"bold" , color:"#3ad197" , fontFamily:"Tajawal-Bold"}}>القرأن </Text>
                     <Text style={{fontSize:14 , fontWeight:"bold" , color:"black" , fontFamily :"Tajawal-Black"}}>بصوت</Text>
                </View>
                <View style={{flexDirection:"row-reverse"}}>
                <Text style={{fontSize:14 , fontWeight:"bold" , color:"#3ad197" , fontFamily:"Tajawal-Bold"}}>شيخك </Text>
                <Text style={{fontSize:14 , fontWeight:"bold" , color:"black" , fontFamily :"Tajawal-Black"}}>المفضل</Text>
                </View>
            </View>
            </TouchableOpacity>

    </Card>
);    
}

const styles = StyleSheet.create({

})
export default SecondCard


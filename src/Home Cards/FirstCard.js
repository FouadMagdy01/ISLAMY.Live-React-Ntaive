import Card from "../components/Card"
import React from "react" 
import { Text , StyleSheet , View  , Image} from "react-native"
const FirstCard = props =>{
return(
    <Card CardStyle={{marginTop:60 , width:"80%" , height :220 , backgroundColor:"white" , marginHorizontal:40 , borderRadius:20, alignItems:"center"}}>
    <View style={{bottom:40}}>
    <Image 
    source={require("../../assets/images/main1.png")}
    style={{height:150, width:200 , borderRadius :800}}
    resizeMode="contain"
    />
    </View>
    <View style={{justifyContent:"center" , alignSelf:"center" , flexDirection:"row-reverse"}}>
      <Text style={{fontSize:13 , color:"#3ad197" , fontFamily :"Tajawal-Bold"}}>مواقيت الصلاه ,</Text>
      <Text style={{fontSize:13 ,  color:"black" , fontFamily :"Tajawal-Black"}}>استمع الي </Text>
      <Text style={{fontSize:13 , color:"#3ad197" , fontFamily :"Tajawal-Bold"}}>القرأن</Text>
      <Text style={{fontSize:13 ,  color:"black" , fontFamily :"Tajawal-Black"}}> بصوت</Text>
    </View>
    <View style={{justifyContent:"center" , alignSelf:"center" , flexDirection:"row-reverse" , marginTop : 4}}>
    <Text style={{fontSize:13 ,  color:"#3ad197" , fontFamily :"Tajawal-Bold"}}> شيخك المفضل</Text>
    <Text style={{fontSize:13 ,  color:"black" , fontFamily :"Tajawal-Black"}}> والمزيد !</Text>
    </View>
  </Card>
);    
}

const styles = StyleSheet.create({

})
export default FirstCard


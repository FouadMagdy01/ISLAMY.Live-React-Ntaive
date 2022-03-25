import axios from 'axios';
import React ,{useEffect ,useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Entypo';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image, 
    Linking
} from 'react-native';
import { animatedColors } from '../src/animatedColors';
import LinearGradient , {presetColors} from "react-native-animated-linear-gradient"
import Swiper from 'react-native-swiper'
const More = ({ navigation }) => {

    return (
      <LinearGradient
      customColors ={animatedColors.custom}
      >
        <ScrollView>

        <Text style={{marginHorizontal:20 , fontFamily :"Tajawal-Bold" , fontSize:25 , color:"white"  , alignSelf :"center"}}>عن التطبيق</Text>
        <Text style={{marginHorizontal:20 , fontFamily :"Tajawal-Black" , fontSize:16 , color:"white"  , marginTop:20 }}>التطبيق مصمم لتسهيل وخدمة المسلمين الذين يستمعون للقرأن بشكل دوري </Text>
        <Text style={{marginHorizontal:20 , fontFamily :"Tajawal-Black" , fontSize:16 , color:"white"  , marginTop:20 }}>هذه تعتبر نسخة ابتدائيه من التطبيق ونعدكم بأرسال تحديثات دورية واضافة مميزات جديدة</Text>
        <Text style={{marginHorizontal:20 , fontFamily :"Tajawal-Black" , fontSize:16 , color:"white"  , marginTop:20 }}>ولذلك فأننا نعتذر عن اي مشاكل او عيوب حالية في التطبيق ونعدكم باصلاح كافة العيوب</Text>
        <Text style={{marginHorizontal:20 , fontFamily :"Tajawal-Black" , fontSize:16 , color:"white"  , marginTop:20 }}>ورغبة منا في تحسين تجربة المستخدم بأكبر قدر ممكن فنحن ننتظر كافة مقترحاتكم او المشاكل التي تجدونها في التطبيق</Text>
        <Text style={{marginHorizontal:20 , fontFamily :"Tajawal-Black" , fontSize:16 , color:"white"  , marginTop:20 , lineHeight:25 }}>ملاحظة     :     التطبيق لا يهدف للربح بأي شكل من الاشكال ونعدكم ببقاءه مجانيا طوال فترة تواجده علي المتجر</Text>
        <Text style={{marginHorizontal:20 , fontFamily :"Tajawal-Black" , fontSize:16 , color:"white"  , marginTop:20 }}>للتواصل والاستفسارات الرجاء زيارتنا عبر الروابط الاتيه</Text>
        <View style ={{flexDirection:"row" , alignSelf :"center" , marginBottom :10 , justifyContent:"space-between" , width:"70%", marginTop:25}}>
            <TouchableOpacity
            onPress={()=> Linking.openURL(`whatsapp://send?phone=${'+201096840406'}`) }
            >
            <Image source={require("../assets/whatsapp.jpg")}
                style={{width : 50 , height : 50 , borderRadius :50/2}}
                />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> Linking.openURL("https://github.com/FouadMagdy01") }
            >
            <Image source={require("../assets/git.jpg" )}
                style={{width : 50 , height : 50 , borderRadius :50/2 ,}}
                />
            </TouchableOpacity>      
            <TouchableOpacity
            onPress={()=> Linking.openURL("https://www.facebook.com/fouadmagdy1911") }
            >
            <Image source={require("../assets/facebook.jpg")}
                style={{width : 50 , height : 50 , borderRadius :50/2}}
                />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> Linking.openURL("https://www.linkedin.com/in/fouad-magdy-570458224/")}
            >
            <Image source={require("../assets/linkedin.png")}
                style={{width : 50 , height : 50 , borderRadius :50/2}}
                />
            </TouchableOpacity>
            </View>
            <Text style={{marginHorizontal:20 , fontFamily :"Tajawal-Bold" , fontSize:25 , color:"white"  , alignSelf :"center"  }}>أو قم بزيارة موقعنا عبر الرابط التالي</Text>
            <TouchableOpacity 
            style={{alignSelf :"center" , height:"auto"}}
            onPress={() => Linking.openURL("https://islamy.live/")}
            >
              <View style={{flexDirection :"row" , justifyContent:"center" , marginTop:15}}>
              <Icon name = "globe"  size={50} style={{color :"black" , marginBottom:"30%" , opacity : 0.5}} />
            <Text style={{ fontSize:20 , color:"white" , fontFamily :"Tajawal-Black" , marginLeft:10}}>@ISLAMY.Live</Text>
              </View>

            </TouchableOpacity>
            </ScrollView>

      </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
    },
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  
})

export default More;
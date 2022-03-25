import React , {useState , useEffect} from "react";
import {  TouchableOpacity, StatusBar, StyleSheet, Text, View , ScrollView } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import Card from "../src/components/Card";
import LinearGradient , {presetColors} from "react-native-animated-linear-gradient"
import { animatedColors } from "../src/animatedColors";
import Icon3 from 'react-native-vector-icons/FontAwesome5';

import axios from "axios";
const Ramadan = ({navigation}) => {
  const [secondstoShow , setsecondstoShow] = useState(60)
  const [minutestoShow , setMinutestoShow] = useState(60)
  const [hourstoShow , setHourstoShow] = useState(24)
  const [daystoShow , setDaystoShow] = useState(365)

  const [f , setF] = useState("")
const CountDown = ()=>{
  var countoDwnDate = new Date("Apr 2, 2022 00:00:00").getTime();
  
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countoDwnDate - now;
    if (distance<0 ) {
      setF("كل عام وأنتم بخير")
      setsecondstoShow(0)
      setMinutestoShow(0)
      setHourstoShow(0) 
      setDaystoShow(0)
      clearInterval(x)
      return
    }else {
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setsecondstoShow(seconds)
    setMinutestoShow(minutes)
    setHourstoShow(hours) 
    setDaystoShow(days)
    }
    // Time calculations for days, hours, minutes and seconds

  
    // Display the result in the element with id="demo"
    // If the count down is finished, write some text
  }, 1000);
}
useEffect(()=>{
  CountDown()
}, [])
  return(
    <LinearGradient 
    customColors ={animatedColors.custom}
    >
      <ScrollView>
      <View style={{flex :1 , alignItems :"center"}}>

        <Text style={{alignSelf :"center", fontSize : 20 , color :"white" , marginTop :15 , fontFamily:"Tajawal-Bold"}}>الوقت المتبقي</Text>
          <View style = {{width : "90%" , alignSelf : "center" , justifyContent:"space-between" , flexDirection : "row-reverse" , marginTop :20}}>
            <Card CardStyle= {styles.TimeCard}>
              <Text style ={styles.timetxt}>ثواني</Text>
              <Text style ={styles.timetxt}>{secondstoShow}</Text>
           </Card>
           <Card CardStyle= {styles.TimeCard}>
              <Text style ={styles.timetxt}>دقائق</Text>
              <Text style ={styles.timetxt}>{minutestoShow}</Text>
            </Card>
           <Card CardStyle= {styles.TimeCard}>
              <Text style ={styles.timetxt}>ساعات</Text>
              <Text style ={styles.timetxt}>{hourstoShow}</Text>
          </Card>
           <Card CardStyle= {styles.TimeCard}>
              <Text style ={styles.timetxt}>ايام</Text>
              <Text style ={styles.timetxt}>{daystoShow}</Text>
          </Card>
      </View>
      <Text style={{fontFamily :"Tajawal-Bold" , fontSize : 20 , color :"white" , marginVertical:10}}>{f}</Text>
      <Card CardStyle = {{height :200 , backgroundColor :"white" ,  width :"80%" , borderRadius :25 , overflow:"hidden" , marginBottom:20}}>
        <TouchableOpacity 
        style={{width :"100%" ,
      height :"100%",
      justifyContent:"center" , 
    }}
      onPress={() => navigation.navigate('Imsakyah')}
        > 
        <Text style={{fontSize :18 , fontFamily :"Tajawal-Bold" , color:"#3ad197" , margin :15}}>امساكية رمضان</Text>
            <Icon3 name="mosque" size={160} style={{color:"#404040" , transform:[{rotate: "-10deg"}], opacity:0.1 , position:"absolute" , left : -20 }}/>

        </TouchableOpacity>
      </Card>
      <Card CardStyle = {{height :200 , backgroundColor :"white" ,  width :"80%" , borderRadius :25 ,overflow:"hidden" }}>
        <TouchableOpacity 
        style={{width :"100%" ,
               height :"100%",
               justifyContent:"center"
                }}
        onPress={() => navigation.navigate('Azkar')}
        > 
          <Text style={{fontSize :18 , fontFamily :"Tajawal-Bold" , color:"#3ad197" , margin :15}}>اذكار وأدعيه</Text>
          <Icon3 name="book" size={180} style={{color:"#404040" , transform:[{rotate: "-10deg"}], opacity:0.1 , position:"absolute" , left : -20 }}/>
        </TouchableOpacity>
      </Card>
      </View>
      </ScrollView>
    </LinearGradient>
  )
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  TimeCard: {
    width : "23%" ,
     backgroundColor:"white" , 
    height :120 ,
   justifyContent:"center" ,
     alignItems :"center" , 
     borderRadius:15
  } ,
  timetxt :{
    fontSize : 18 ,
    color :"#1D976C",
    marginVertical:8 ,
    fontFamily:"Tajawal-Bold"
  }
});

export default Ramadan;
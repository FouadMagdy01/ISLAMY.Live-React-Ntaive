import React ,{useState , useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    PermissionsAndroid ,
    Image, 
    ActivityIndicator,
    

} from 'react-native';

import Geolocation from "@react-native-community/geolocation";
import Swiper from 'react-native-swiper'
import SalahCard from '../src/components/SalahCard';
import { animatedColors } from "../src/animatedColors";
import LinearGradient , {presetColors} from "react-native-animated-linear-gradient"
import Card from '../src/components/Card';
import axios from 'axios';
const Imsakyah = ({ navigation }) => {
    const [granted ,setGranted]= useState(false)
    const [longitude ,setLongitude]= useState(null)
    const [latitude ,setLatitude]= useState(null)
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)
    const [today ,setToday] = useState(null)
    const [ reload , setReload ] = useState(false)
    const [ refresh , setRefresh ] = useState(false)

    const success =(position)=>{
        console.log("done")
    }
    const requestLocationPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "معرفة مواعيد الصلاة بشكل دقيق",
              message:
                "يرحي تزويدنا بموقعك لضمان ادق النتائج" ,
              buttonNeutral: "ذكرني لاحقا",
              buttonNegative: "الغاء",
              buttonPositive: "حسنا"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
             setGranted(true)
                await Geolocation.getCurrentPosition(
                pos => {
                    const longRes =  pos.coords.longitude
                    const lRes =  pos.coords.latitude
                    setLatitude(lRes)
                    setLongitude(longRes)
                },
                err =>{
                    if(err.code===2){              
                        alert("قم بتفعيل الموقع الجغرافي")
                    }
                },
            )
            setLoading(true)
            const response = await axios.get(`https://api.aladhan.com/v1/hijriCalendar?latitude=${latitude}&longitude=${longitude}&month=9&year=1443&adjustment=-1`)
            setData(response.data.data)
            setLoading(false)
            } else {
                setGranted(false)
          }
        } catch (err) {
            setReload(true)
        }
      };
      useEffect(()=>{
          requestLocationPermission()
      }, [longitude,latitude , refresh])
    return (
        <LinearGradient
        customColors ={animatedColors.custom}
        >
        <View style={styles.container}>
        {reload&&loading&&granted&& <View style={{width:"100%" , height:"100%" , justifyContent:"center"}}>
              <Text 
              style={{fontFamily:"Tajawal-Bold" , fontSize:18 , alignSelf :"center" , color:"white" , marginHorizontal : 20}}
              >قد يحدث خطأ في حالة عدم تفعيلك لخدمة تحديد المواقع في هاتفك</Text>
                <TouchableOpacity
                onPress={()=> {
                refresh ? setRefresh(false) : setRefresh(true)
                setReload(false)
            }}
                >
                    <Text style={{fontFamily:"Tajawal-Black" , fontSize:18 , alignSelf :"center" , color:"white" , marginTop : 20}} >اضغط هنا لتحديث الصفحة</Text>
                </TouchableOpacity>
                </View>

        }
            {granted&&loading&& <View style={{width:"100%" , height:"100%"}}>
            <ActivityIndicator
            style={{width:"100%" , height:"100%" , alignSelf :"center"}}
            size="large" color="white" />
                </View>

            }
            {granted? <View
            style={{flex:1}}
            > 
                <Swiper 
                 loop={false}
                 index={0}
                 activeDotColor="white"
            >
                {data.map((day ,index) =>{
                return <View 
                key={index}
                style={{width:"100%" , height : "75%"}}
                >
                <View
                >
                <SalahCard SalahCardStyle={styles.day} 
                title = {day.date.hijri.weekday.ar}
                time = {day.date.readable} 
                hijri = { " / "+ day.date.hijri.day+' ' +day.date.hijri.month.en + ' '+day.date.hijri.year}
                />
                <View style={{flexDirection:"row" , width:"90%" , alignSelf:"center", justifyContent:"space-between"}}>
                <SalahCard SalahCardStyle={styles.Time1}
                title = "الفجر"
                time ={day.timings.Fajr}
                />
                <SalahCard SalahCardStyle={styles.Time1}
                title = "الظهر"
                time = {day.timings.Dhuhr}
                />
                </View>
                <View style={{flexDirection:"row" , width:"90%" , alignSelf:"center" , justifyContent:"space-between"}}>
                <SalahCard SalahCardStyle={styles.Time1}
                title = "العصر"
                time =  {day.timings.Asr}
                />
                <SalahCard SalahCardStyle={styles.Time1} 
                title ="المغرب"
                time ={day.timings.Maghrib}
                />
                </View>
                <SalahCard SalahCardStyle={styles.day}
                title ="العشاء"
                time =  {day.timings.Isha}
                />
                </View>
                </View>         
            })}
            </Swiper> 
            <TouchableOpacity
                style={{marginBottom:"30%"}}
                onPress={()=> {
                refresh ? setRefresh(false) : setRefresh(true)
                setReload(false)
            }}
                >
                    <Text style={{fontFamily:"Tajawal-Black" , fontSize:18 , alignSelf :"center" , color:"white" , marginTop : 20}} >اضغط هنا لتحديث الصفحة</Text>
                </TouchableOpacity>
            </View> 
                : 
                <View style={{flex : 1 , marginTop : 50 , justifyContent :"center"}}>
                    <Card CardStyle ={{width : "90%" , height :160  , backgroundColor :"white" , alignSelf :"center" , justifyContent:"center" , borderRadius : 25}}>
                        <Image
                        resizeMode='contain' 
                        style={{ height : 300 , alignSelf : "center" , top :-200 ,  position :"absolute"}}
                        source={require("../assets/images/location.png")}
                        />
                    <TouchableOpacity
                 onPress={() =>{
                     requestLocationPermission()
                 }}
                >
                    <Text style={{alignSelf:"center" , fontSize : 14 , color :"#3ad197" , top :50 , fontFamily:"Tajawal-Medium"}} >اضغط هنا للسماح للبرنامج باستخدام موقعك</Text> 
                </TouchableOpacity>
                    </Card>

                </View> }
        </View>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width :"100%",

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
    } ,
    day :{
        width : "90%",
        marginTop:20 
    },
    Time1 :{
        width :"47%",
        marginTop:20
    },
    Time2 :{
        width :"30%",
        marginTop:20
    }
})

export default Imsakyah;
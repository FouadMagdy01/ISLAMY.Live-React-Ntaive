import axios from 'axios';
import React ,{useEffect ,useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList ,
    ScrollView
} from 'react-native';
import { animatedColors } from '../src/animatedColors';
import LinearGradient , {presetColors} from "react-native-animated-linear-gradient"
import Card from '../src/components/Card';

const Azkar = ({ navigation }) => {
  
  const [allData,setAllData] = useState([])
  const [allPressed , setAllPressed] = useState(false) 
  const [hadithPressed , setHadithPressed] = useState(false) 
  const [duaPressed , setDuaPressed] = useState(false) 
  const [filteredData , setFilteredData] = useState("")
  const HadithSearch = async()=>{
    const res = await axios.get('https://islamy-live-default-rtdb.firebaseio.com/Ramadan.json')
    for(const key in res.data){
      let element = res.data[key]
      setAllData((prev) =>{
        return [...prev , element]
      })
    }
  }

const DuaPressed =()=>{
    setFilteredData("dua")
    setAllPressed(false)
    setHadithPressed(false) 
    setDuaPressed(true)
}
const HadithPressed =()=>{
    setFilteredData("hadith")
    setAllPressed(false)
    setHadithPressed(true) 
    setDuaPressed(false)
}
const AllPressed = ()=>{
    setFilteredData("")
    setAllPressed(true)
    setHadithPressed(false) 
    setDuaPressed(false)
}
const filter =(list) =>{
    if (filteredData===""){
        return list
    }else {
        return list.filter((item)=>{
            return item.type === filteredData
        })
    }
}

  useEffect(()=>{
    HadithSearch()
  },[])
    return (
      <LinearGradient
      customColors ={animatedColors.custom}
      > 
      <View style={{flex:1 , alignItems:"center"}}>
          <View style={{flexDirection :"row-reverse" , justifyContent :"space-between" , width :"90%" , marginTop : "15%" , marginBottom:20}}>
              <Card CardStyle = {{height : 70 , backgroundColor : filteredData==="" ? "#1C8D2F" :"white" , width :"25%" , borderRadius :15 , justifyContent:"center" , alignItems:"center"}}>
                  <TouchableOpacity 
                  onPress={()=>{
                      AllPressed()
                  }}
                style={{width : "100%" , height:"100%",justifyContent:"center" , alignItems:"center"}}
                >
                    <Text style ={{color : filteredData==="" ?  "white" : "#1C8D2F" , fontSize :18 , fontFamily :"Tajawal-Bold" }}>الكل</Text>
                  </TouchableOpacity>
              </Card>
              <Card CardStyle = {{height : 70 , backgroundColor :filteredData==="hadith" ? "#1C8D2F" :"white" , width :"25%" , borderRadius :15 , justifyContent:"center" , alignItems:"center"}}>
                 <TouchableOpacity
                onPress={()=>{
                    HadithPressed()
                }}
                style={{width : "100%" , height:"100%",justifyContent:"center" , alignItems:"center"}}
                 >
                    <Text style ={{color :filteredData==="hadith" ?  "white" : "#1C8D2F" , fontSize :18 , fontFamily :"Tajawal-Bold" }}>حديث</Text>
    
                </TouchableOpacity>
              </Card>
              <Card CardStyle = {{height : 70 , backgroundColor :filteredData==="dua" ? "#1C8D2F" :"white" , width :"25%" , borderRadius :15 , }}>
                 <TouchableOpacity 
                 onPress={()=>{
                     DuaPressed()
                 }}
                style={{width : "100%" , height:"100%",justifyContent:"center" , alignItems:"center"}}
                 >
                <Text style ={{color :filteredData==="dua" ?  "white" : "#1C8D2F" , fontSize :18 , fontFamily :"Tajawal-Bold" }}>دعاء</Text>

                 </TouchableOpacity>
              </Card>
          </View>
          <ScrollView style={{width : "90%"}}>
              {filter(allData).map((element , index)=>{
              return <View key={index}> 
                    <Card CardStyle={{height:"auto" , width : "100%" , backgroundColor:"white" , marginTop:15 , borderRadius:15 , marginBottom : filter(allData).length-index ===1 ? 50 : 0}}>
                        <View style={{width:"25%" , height:60 , backgroundColor:"#1C8D2F" , alignSelf:"flex-end" , borderRadius:15 , margin:10 , justifyContent :"center" , alignItems:"center"}}>
                            <Text style={{fontSize :18 , fontFamily :"Tajawal-Bold" , color :"white" ,}} >{element.typeAr}</Text>
                        </View>
                             <Text style ={{fontSize :18 , fontFamily :"Tajawal-Bold" , margin :15 , lineHeight:30}}>{element.text}</Text>
                    </Card>
              </View> 
              })}
          </ScrollView>
      </View>

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

export default Azkar;
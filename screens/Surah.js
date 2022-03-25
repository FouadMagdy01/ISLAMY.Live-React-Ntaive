import React ,{useState , useEffect} from "react";
import { 
    Text,
    StyleSheet,
    View, 
    FlatList,
    TouchableOpacity,
    TextInput
} from "react-native";
import TrackPlayer ,{ State ,useProgress } from 'react-native-track-player';
import Icon1 from 'react-native-vector-icons/Entypo';
import Slider from '@react-native-community/slider';
import { TimeCalculator } from "../src/Time";
import PlayPause from "../src/components/Pause";
import Card from "../src/components/Card"
import api from "../services/api"
import { SurahName } from "../src/Name";
import {surah} from "../src/Surah"
import { animatedColors } from "../src/animatedColors";
import LinearGradient , {presetColors} from "react-native-animated-linear-gradient"
TrackPlayer.updateOptions=({
  stopWithApp : true ,
  capabilities  :[
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
   TrackPlayer.CAPABILITY_SKIPTONEXT,
   TrackPlayer.CAPABILITY_SKIPTOPRECIOUS,
  TrackPlayer.CAPABILITY_SKIP
  ] ,
     compactCapabilities:[
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIPTONEXT,
      TrackPlayer.CAPABILITY_SKIPTOPRECIOUS,
      TrackPlayer.CAPABILITY_SKIP

     ]
})


const Surah = ({route , navigation}) =>{


  const {id , reciterName  , Sname} = route.params
  const [surahList , setSurahList] =useState(surah)
    const [name , setName] = useState("")
    const[enname , setEnname] =useState("")
    const[f , setF] =useState("")
    const[duration , setDuration] =useState([])
    const [pauseed ,setPaused] =useState(true)
    const [tracks,setTracks] = useState([])
    const [finalTracks , setFinalTracks] = useState([])
    const [term,setTerm] = useState("")


    const searchHandler = async(e)=>{
      console.log(e)
      const target = surah.filter((res)=> {
        return res.name_arabic.includes(e.toLowerCase())
      })
      setSurahList(target)
    }
//   const trackStatus = async ()=>{
    // const state = await TrackPlayer.getState();
    // if (state === State.Playing) {
    //     setStatus(true)
    // } else{
    //     setStatus(false)
    // };
    // const add=  await TrackPlayer.add(tracks)
//   }


    const nextHandler = async()=>{
      await TrackPlayer.skipToNext()
    }

      const playHandler =async ()=>{
        if (tracks.length===0) {
          alert("الرحاء تحديد السورة أولا")
        } else {
          await TrackPlayer.play()
          let trackIndex = await TrackPlayer.getCurrentTrack();
          let trackObject = await TrackPlayer.getTrack(trackIndex);
          let track = SurahName(trackObject.chapter_id)
           setName(track[0].name)
           setEnname(track[0].transliteration)
           setPaused(false)
        }
      }
      const pauseHandler = async ()=>{
        TrackPlayer.pause()
        let trackIndex = await TrackPlayer.getCurrentTrack();
        let trackObject = await TrackPlayer.getTrack(trackIndex);
        let track = SurahName(trackObject.chapter_id)
         setName(track[0].name)
         setEnname(track[0].transliteration)
         setPaused(true)
      }

      const GetSurahAudioFile = async () =>{
        const response = await api.get(`/chapter_recitations/${id}`)
        const results = await response.data.audio_files.map((track) =>({
         chapter_id :track.chapter_id,
         size : track.file_size ,
         url :track.audio_url,
       }) )
       setTracks(results)
      //  for (let i =0 ; i<=114 ;i++) {
      //    let obj1 = surah[i] 
      //    setTracks([{...obg1, ...tracks[i]}], )
      //  }
      //  console.log(tracks)
      //  console.log(surah[0])
       await TrackPlayer.add(tracks)
      }
        const setupTP = async()=>{
            try {
              const state = await TrackPlayer.getState();
              if (state === State.Playing) {
                let trackIndex = await TrackPlayer.getCurrentTrack();
                let trackObject = await TrackPlayer.getTrack(trackIndex);
                let track = SurahName(trackObject.chapter_id)
               await setName(track[0].name)
                await setEnname(track[0].transliteration)
                setPaused(false)
              } else{
                return
              };
            } catch(e) {
              console.log(e)
            }
          }
          const progress = useProgress()
useEffect(()=>{
  setupTP()
} , [])


    return(
        <LinearGradient 
        customColors={animatedColors.custom}
         >
           <View
           style ={{width : "100%" , height:"100%"}}
           >

          <View style ={{flexDirection : "row-reverse"  ,  alignItems : "center"  ,  height : 45 , backgroundColor  :"white" , width : "90%", marginTop : 15 , alignSelf : "center", borderRadius : 25 , marginBottom :10}}>
            <Icon1 name="magnifying-glass" style ={{color : "#3ad197" , marginHorizontal : 20  , opacity : 0.5}} size={25} />
          <TextInput 
          value={term} 
          onChangeText={(newTerm)=>{
            setTerm(newTerm)
            searchHandler(newTerm) 
          }}
          placeholder ="ادخل اسم السورة" 
          style={{ color : "#3ad197" , width : "100%" , fontFamily:"Tajawal-Bold" ,}}
          placeholderTextColor = "gray"
          />
          </View>

            <FlatList 
            style={{width:"90%" , alignSelf:"center"}}
            keyExtractor={(item)=> item.id}
          data={surahList}
          renderItem={(surahList) =>{
            return(
                <Card
                CardStyle={{ width:"100%" , height :80 , backgroundColor: "white"  , borderRadius:20, marginHorizontal :0 , marginBottom:surahList.item.id!==114 ? 20 :150 , justifyContent :"center" , marginTop : surahList.index===0 ? 20 :0}}>
                    <TouchableOpacity
                    onPress={async() => {
                      setPaused(false)
                      setName(surahList.item.name_arabic)
                      setEnname(surahList.item.name_simple)
                    const state = await TrackPlayer.getState();
                    if (state === State.Playing) {
                      console.log("playing")
                      let trackIndex = await TrackPlayer.getCurrentTrack();
                      let trackObject = await TrackPlayer.getTrack(trackIndex);
                      console.log(trackObject.url)  
                      if(trackObject.url.includes(Sname.toLowerCase())){
                        await TrackPlayer.skip(surahList.item.id-1)
                      } else {
                        console.log("should reser")
                        try {
                          await TrackPlayer.reset()
                          await GetSurahAudioFile()
                          await TrackPlayer.play()
                          await TrackPlayer.skip(surahList.item.id-1)
                        }catch{
                          alert("حدث خطأ ما الرجاء اختيار السورة مره اخري")

                        }

                      }
                    } else{
                      try  {
                        await GetSurahAudioFile()
                        await TrackPlayer.play()
                        await TrackPlayer.skip(surahList.item.id-1)
                      } catch {
                        alert("حدث خطأ ما الرجاء اختيار السورة مره اخري")
                      }

                    };
                    }}
                    style={{width:"100%" , height :"100%", alignItems:"center" , justifyContent:"center" ,  }}>
                    <Text style={{fontSize:16 , color:"black" , fontFamily :"Tajawal-Black"  }}>
                    {surahList.item.name_arabic}
                    </Text>
                    <Text style={{fontSize:16 , color:"#3ad197" ,fontFamily:"Roboto-Bold" }}>
                    {surahList.item.name_complex}
                    </Text>
                    </TouchableOpacity>
                </Card>
            );
          }}
          />
          <View style={{
            width:"100%" ,
            maxWidth:"100%",
            height:70 ,
            backgroundColor:"white",
            position:"absolute" ,
            bottom:15,
            borderRadius :20,
            flexDirection:"row",
            elevation:10,

          }}>
            <View style={{justifyContent:"center" ,alignItems:"center" , marginLeft :10 , marginRight:10}}>
              <Text style={{fontSize:14 ,color:"black"}}> {name}</Text>
              <Text style={{color:"#3ad197" , fontSize:10}}>{enname}</Text>
            </View>
            {pauseed?  <PlayPause icon ="play" buttonPressed ={()=> playHandler()} /> : 
            <PlayPause icon ="pause" buttonPressed ={()=> pauseHandler()} />}
            <TouchableOpacity style={{alignItems :"center" ,
          justifyContent:"center",
          backgroundColor:"#F8F8F8",
          alignSelf:"center" ,
          width:35,
          height:35 ,
          borderRadius: 35/2,
          marginRight:8
          
          }}
          onPress={() => nextHandler()}
          >
              <View>
                <Icon1 name='controller-next' size={18} color ="#3ad197"/>
              </View>
            </TouchableOpacity>
            <Text style={{alignSelf:"center" , fontSize:12 , marginHorizontal :2 ,color:"#3ad197"}}> {TimeCalculator(parseInt(progress.position))}</Text>
            <View style={{ alignSelf:"center",}}>
              <Slider 
              style={{
                width :100 ,
                height : 10,                
              }}
              value ={progress.position}
              minimumValue ={0}
              maximumValue={progress.duration}
              thumbTintColor="#3ad197"
              minimumTrackTintColor="#3ad197"
              maximumTrackTintColor ="black"
              onSlidingComplete={async(value) =>{
                await TrackPlayer.seekTo(value)
              }}

              />
            </View>
            <Text style={{alignSelf:"center" , fontSize:12 , marginRight :0 , color:"#3ad197"}}> {TimeCalculator(parseInt(progress.duration))}</Text>

          </View>
          </View>

        </LinearGradient>
    );
}
const styles = StyleSheet.create({

})
export default Surah
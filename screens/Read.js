import React , {useState} from "react";
import Pdf from "react-native-pdf"; 
import { Text, StyleSheet , View  , TouchableOpacity , TextInput , ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/Feather';


const Read = props =>{
    const [page , setPage] = useState(1)
    const [scale , setScale] = useState(1)
    const [number , setNumber] = useState(0)
    return(
        <View style={{flex:1}}>
            <Pdf
            renderActivityIndicator={()=>{
                return  <View style={{width:"100%" , height:"100%"  ,justifyContent:"center"}}>
                    <Text style={{ marginHorizontal:20, fontFamily:"Tajawal-Black" , fontSize:16 , alignSelf :"center" , color:"#3ad197" , marginVertical : 20 , lineHeight:25}} >الرجاء الانتظار حتي يتم تحميل المصحف</Text>

                <ActivityIndicator
                style={{ alignSelf :"center"}}
                size="large" color="green" />
                    </View>  
            }}
            page={page}
            enableRTL={false}
            scale={scale}
            enablePaging={true}
            source={{uri :"https://upload.wikimedia.org/wikipedia/commons/b/b2/The_Holy_Quran.pdf"}}
            style={{width:"100%" , height:"90%"}}
            />
            <View style={{flexDirection :"row"  , alignSelf :"center"  , justifyContent :"space-between"  , width:"90%"}}>
            <TouchableOpacity
            onPress={()=>{
                if(page ===1){
                    setPage(1)
                }else{
                    setPage(page-1)
                }
            }}
            >
                <Icon name="chevron-left" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                if(scale === 1){
                    setScale(1)
                }else{
                    setScale(scale-0.2)
                }
            }}
            >
                <Icon name="zoom-out" size={30}/>
            </TouchableOpacity>
            <TextInput
            onChangeText={(value)=>{
               const parsedValue= parseFloat(value)
                setNumber(parsedValue)
            }}
            onEndEditing={()=>{
                setPage(number)
            }
            }
            keyboardType="number-pad"
            placeholder= "رقم الصفحة"
            style ={{width:"25%" , height:"90%" , backgroundColor:"white" , borderRadius:15 , flexDirection:"row-reverse"}}
            />
            <TouchableOpacity
            onPress={()=>{
                if (scale ===3){
                    setScale(3)
                }else{
                    setScale(scale+0.1)
                }
            }}
            >
                <Icon name="zoom-in" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                setPage(page+1)
            }}
            >
                <Icon name="chevron-right" size={30}/>
            </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

})
export default Read
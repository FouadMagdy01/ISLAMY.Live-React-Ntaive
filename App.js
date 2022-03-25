import React ,{useEffect , useState} from 'react';
import { View , StyleSheet } from 'react-native';
import { createStackNavigator , TransitionPresets } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/tabs";
import Header from './src/components/Header';
import Listen from './screens/Listen';
import Surah from './screens/Surah';
import Azkar from './screens/Azkar';
import Imsakyah from './screens/Imsakyah';
import Read from "./screens/Read"
import TrackPlayer ,{ Capability, State ,useProgress  } from 'react-native-track-player';
import SplashScreen from 'react-native-splash-screen';
const Stack = createStackNavigator();



const App = () => {
  const setupTP = async() =>{
    SplashScreen.hide()
    await TrackPlayer.setupPlayer()
    return TrackPlayer.destroy()
  } 
  useEffect(()=>{
    setupTP()
  }, [])
  return (
    <View style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          ...TransitionPresets.SlideFromRightIOS
          
        }}
        initialRouteName={'Tabs'}
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerTitle: (props) => <Header {...props}/>  ,
          headerStyle :{
            backgroundColor:"white"
          },
          headerTintColor:"#1C8D2F" ,
          headerTitleStyle:{color:"white"} ,
          ...TransitionPresets.SlideFromRightIOS,
        
        }}
        />
        <Stack.Screen
        name='Listen'
        component={Listen}
        options={{headerTitle: (props) => <Header {...props}/>  ,
        headerStyle :{
          backgroundColor:"white"
        },
        headerTintColor:"#1C8D2F" ,
        headerTitleStyle:{color:"white"} ,      
      }}
        />
        <Stack.Screen 
        name='Imsakyah' 
        component={Imsakyah}
        options={{headerTitle: (props) => <Header {...props}/>  ,
        headerStyle :{
          backgroundColor:"white"
        },
        headerTintColor:"#1C8D2F" ,
        headerTitleStyle:{color:"white"} ,      
      }}
        />
        <Stack.Screen 
        name='Read' 
        component={Read}
        options={{headerTitle: (props) => <Header {...props}/>  ,
        headerStyle :{
          backgroundColor:"white"
        },
        headerTintColor:"#1C8D2F" ,
        headerTitleStyle:{color:"white"} ,      
      }}
        />
        <Stack.Screen
        name='Surah'
        component={Surah}
        options={{headerTitle: (props) => <Header {...props}/>  ,
        headerStyle :{
          backgroundColor:"white"
        },
        headerTintColor:"#1C8D2F" ,
        headerTitleStyle:{color:"white"} ,
      
      }}
        />
        <Stack.Screen 
        name='Azkar' 
        component={Azkar}
        options={{headerTitle: (props) => <Header {...props}/>  ,
        headerStyle :{
          backgroundColor:"white"
        },
        headerTintColor:"#1C8D2F" ,
        headerTitleStyle:{color:"white"} ,      
      }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}
const styles = StyleSheet.create({})
export default App;
import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,

} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import { Home } from "../screens"
import LinearGradient from "react-native-linear-gradient";
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from "react-native-vector-icons/Entypo"
import Icon5 from "react-native-vector-icons/Ionicons"
import Icon6 from "react-native-vector-icons/Feather"
import { Ramadan } from "../screens"
import { More } from "../screens"
import { Quran } from "../screens"
import { Salah } from "../screens"

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ children, onPress }) => {
    return (
        <View style={{ zIndex:5 ,...styles.shadow}}>
            <View>
            <TouchableOpacity
            style={{
                top: -30,
                alignItems: "center",
                justifyContent: "center",
            }}
            onPress={onPress}>
            <LinearGradient
                colors={['rgb(20, 45 , 30)', 'rgb(41, 243 , 0)']}
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                }}>
                {children}
            </LinearGradient>
        </TouchableOpacity>
            </View>
        
        </View>
    );
}
const Tabs = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: "white",
                    borderTopColor: "transparent",
                    height: 60
                }
            }}
        >
            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <View style={{ alignItems: "center", justifyContent: "center", }}>
                            <Icon6  name="more-horizontal" size={20} color={focused? "#1C8D2F": "black" } /> 
                            <Text style={{
                                color: focused ? "#1C8D2F"
                                    : "black" ,
                                fontSize: 13,
                                bottom : 0 ,
                                fontFamily :"Tajawal-Medium"

                            }} > المزيد  </Text>
                        </View>

                }
                }
            />
            <Tab.Screen
                name="Salah"
                component={Salah}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <View style={{ alignItems: "center", justifyContent: "center", }}>
                            <Icon3  name="mosque" size={20} color={focused? "#1C8D2F": "black" } /> 
                            <Text style={{
                                color: focused ? "#1C8D2F"
                                    : "black" ,
                                fontSize: 13,
                                bottom : 0 ,
                                fontFamily :"Tajawal-Medium"

                            }} >م. الصلاه</Text>
                        </View>

                }
                }
            />
            <Tab.Screen
                name="Ramadan"
                component={Ramadan}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{alignItems :"center"}}>
                        <Icon5 name="moon" size={28} color={focused? "white" : "black"} />
                        <Text  style={{
                                color: focused ? "white"
                                    : "black" ,
                                fontSize: 13 ,
                                bottom : 0,
                                fontFamily :"Tajawal-Medium"

                            }}>رمضان</Text>
                        </View>
                        ),
                    tabBarButton: (props) =>
                        <TabBarCustomButton {...props} />
                }

                }
            />
            <Tab.Screen
                name="Quran"
                component={Quran}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <View style={{ alignItems: "center", justifyContent: "center", }}>
                            <Icon3  name="quran" size={20} color={focused? "#1C8D2F": "black" } /> 
                            <Text style={{
                                color: focused ? "#1C8D2F"
                                    : "black" ,
                                fontSize: 13 ,
                                bottom : 0 ,
                                fontFamily :"Tajawal-Medium"


                            }} >القرأن </Text>
                        </View>

                }
                }
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <View style={{ alignItems: "center", justifyContent: "center", }}>
                            <Icon4 name="home" size={20}color={focused? "#1C8D2F": "black"  } />
                            <Text style={{
                                color: focused ? "#1C8D2F"
                                    : "black" ,
                                fontSize: 13 ,
                                bottom : 0 ,
                                fontFamily :"Tajawal-Medium"

                            }} > الرئيسية</Text>
                        </View>

                }
                }
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#3ad197" ,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;
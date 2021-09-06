import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from './screens/Map';
import Index from './screens/Index';
import Account from './screens/Account';
import Food from './api/GetFood';
import Drink from './api/GetDrink';
const Tab = createBottomTabNavigator();
const COLOR_STARBUCK = '#036635'
export default function bottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'black',
            tabBarShowLabel:false,
            tabBarStyle: {
                bottom: 20,
                position: 'absolute',
                left: 20,
                right: 20,
                elevation: 0,
                height: 70,
                borderRadius: 20,
                backgroundColor:COLOR_STARBUCK,
                borderTopWidth:0
            }
        }}
        >
            <Tab.Screen name="Index" component={Index}
                options={{
                    tabBarIcon: (tabinfo) => (
                        <View style={{ alignItems:'center',justifyContent:'center',top:1}}>
                            <Image source={require('./assets/tabbaricon/home.png')} style={{ width:25,height:25,tintColor:'white' }} resizeMode='contain' />
                            <Text style={{fontSize:12,color:'white'}}>
                                Home
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Account" component={Account}
                 options={{
                    tabBarIcon: (tabinfo) => (
                        <View style={{ alignItems:'center',justifyContent:'center',top:1}}>
                            <Image source={require('./assets/tabbaricon/user.png')} style={{ width:25,height:25,tintColor:'white' }} resizeMode='contain' />
                            <Text style={{fontSize:12,color:'white'}}>
                                Account
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Settings" component={Map}
                 options={{
                    tabBarIcon: (tabinfo) => (
                        <View style={{ alignItems:'center',justifyContent:'center',top:1}}>
                            <Image source={require('./assets/tabbaricon/cart.png')} style={{ width:40,height:40,tintColor:'white' }} resizeMode='contain' />
                            <Text style={{fontSize:12,color:'white'}}>
                                Cart
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Food" component={Food}
                 options={{
                    tabBarIcon: (tabinfo) => (
                        <View style={{ alignItems:'center',justifyContent:'center',top:1}}>
                            <Image source={require('./assets/tabbaricon/food.png')} style={{ width:25,height:25,tintColor:'white'}} resizeMode='contain' />
                            <Text style={{fontSize:12,color:'white'}}>
                                Food
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Drink" component={Drink}
                 options={{
                    tabBarIcon: (tabinfo) => (
                        <View style={{ alignItems:'center',justifyContent:'center',top:1}}>
                            <Image source={require('./assets/tabbaricon/drink.png')} style={{ width:25,height:25,tintColor:'white'}} resizeMode='contain' />
                            <Text style={{fontSize:12,color:'white'}}>
                                Drink
                            </Text>
                        </View>
                    )
                }}
            />
            
        </Tab.Navigator>
        
    )
}


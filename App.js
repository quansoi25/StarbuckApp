// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './screens/Category';
import Details from './screens/Detail';
import BottomTab from './bottomTabNavigator'
import GetFood from './api/GetFood';
import Drink from './screens/Drink';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="BottomTab" component={BottomTab}/>
        <Stack.Screen name="Food" component={GetFood}/>
        <Stack.Screen name="Home" component={Category} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Drink" component={Drink} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
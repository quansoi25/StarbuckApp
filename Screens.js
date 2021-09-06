import * as React from 'react';
import Category from './screens/Category'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function HomeScreen({navigation}) {
    const onPress=()=>{
      navigation.navigate("Details")
    }
    return (
      <View style={{ flex:1}}>
          <Category />
        <TouchableOpacity onPress={onPress} style={{padding:10,paddingLeft:50,paddingRight:50,borderRadius:20,alignItems:'center'}}>
          <Text>New Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function DetailsScreen({navigation}) {
    const onPress=()=>{
      navigation.navigate("Home")
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <TouchableOpacity onPress={onPress} style={{backgroundColor:'pink',padding:10,paddingLeft:100,paddingRight:100,height:50,borderRadius:20,alignItems:'center'}}>
          <Text>Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
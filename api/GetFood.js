import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native';
import Food from '../screens/Food'
var userApi = "https://cf9c-42-119-80-207.ngrok.io/products"
export default function GetFood() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    function getFoodBagels() {
        fetch(userApi+'?food=bagels')
            .then(res => res.json())
            .then(data => setData(data))
    }
    function getFoodCakePops() {
      fetch(userApi+'?food=cakepops')
          .then(res => res.json())
          .then(data1 => setData1(data1))
  }
    useEffect(() => {
      getFoodBagels(data);
      getFoodCakePops(data1);
    }, []);
  return (
    <View style={{ flex: 1 }}>
      {data && <Food food={data} cake={data1}/>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

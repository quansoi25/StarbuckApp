import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View,Image, ScrollView} from 'react-native';


export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text  style={styles.textHeader}>Your address?</Text>
            </View>
            <MapView style={styles.map}
                region={{
                    latitude: 10.82302,
                    longitude: 106.62965,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.021
                }} />
            <View style={styles.body}>
                <Text style={styles.textBold}>
                    Cart 
                </Text>
                <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false} style={{paddingVertical: 20}}>
                <View style={{flexDirection: 'row',justifyContent:'space-between',height:200,alignItems: 'center',marginBottom: 20}}>
                    <Image source={require('../assets/drink/drink1.png')} style={styles.image}/>
                    <Text style={{ textAlign: 'center' }}>Mango Dragonfruit Lemonade {'\n'} Starbucks Refreshers®{'\n'}{'\n'}50.000 vnd</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent:'space-between',height:200,alignItems: 'center' }}>
                    <Image source={require('../assets/drink/drink1.png')} style={styles.image}/>
                    <Text style={{ textAlign: 'center' }}>Mango Dragonfruit Lemonade {'\n'} Starbucks Refreshers®{'\n'}{'\n'}50.000 vnd</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent:'space-between',height:200,alignItems: 'center' }}>
                    <Image source={require('../assets/drink/drink1.png')} style={styles.image}/>
                    <Text style={{ textAlign: 'center' }}>Mango Dragonfruit Lemonade {'\n'} Starbucks Refreshers®{'\n'}{'\n'}50.000 vnd</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent:'space-between',height:200,alignItems: 'center' }}>
                    <Image source={require('../assets/drink/drink1.png')} style={styles.image}/>
                    <Text style={{ textAlign: 'center' }}>Mango Dragonfruit Lemonade {'\n'} Starbucks Refreshers®{'\n'}{'\n'}50.000 vnd</Text>
                </View>
                </ScrollView>
            </View>
            <View style={{flex:1}}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: "100%",
        height: 250
    }, header: {
        flex: 1,
        width: "100%",
        alignItems: 'stretch',
        padding: 10,
        justifyContent: 'center',
    },body: {
        flex: 5,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'white'
    }, textBold: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop:30
    }, textHeader: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black'
    },image:{
        height:150,
        width:150,
        borderRadius: 400 / 2
    }
});
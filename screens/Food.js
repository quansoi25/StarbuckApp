import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, FlatList } from 'react-native'
const COLOR_STARBUCK = '#036635'
export default function Food({ food,cake }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={require('../assets/food/backgroundfood.jpg')} style={styles.background}>
                    <Text style={styles.textHeader}>Food</Text>
                </ImageBackground>
            </View>
            <View style={styles.body}>
                <Text style={styles.textBold}>Hot breakfast</Text>
                <FlatList
                    horizontal={true}
                    data={food}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.products}>
                            <View style={styles.product}>
                                <Image source={{uri:'https://globalassets.starbucks.com/assets/738d89c837874a4ab31044808764b6fb.jpg?impolicy=1by1_medium_630'}} style={styles.image} />
                                <Text style={{ textAlign: 'center' }}>{item.name}{'\n'}{item.price}.000 vnđ</Text>
                            </View>
                        </View>
                    )}
                />
                <Text style={styles.textBold}>Hot breakfast</Text>
                <FlatList
                    horizontal={true}
                    data={cake}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.products}>
                            <View style={styles.product}>
                                <Image source={{uri:'https://globalassets.starbucks.com/assets/9ca96bf78afb4b91975946fd4528c24d.jpg?impolicy=1by1_medium_630'}} style={styles.image} />
                                <Text style={{ textAlign: 'center' }}>{item.name}{'\n'}{item.price}.000 vnđ</Text>
                            </View>
                        </View>
                    )}
                />
                <View style={{flex:7}}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: '20%',
        width: '100%',
        flex: 2,
    }, textHeader: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black'
    }, background: {
        height: 250,
        width: '100%',
        alignItems: 'center',
        flex: 2,
        justifyContent: 'center'
    }, body: {
        flex: 6,
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white'
    }, textBold: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 10
    }, image: {
        width: 150,
        height: 150,
        borderRadius: 400 / 2
    }, products: {
        flexDirection: 'row',
    }, product: {
        marginLeft: 10,
        alignItems: 'center',
    }
})



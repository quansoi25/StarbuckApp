import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch, Image } from 'react-native'
import { style } from 'styled-system'
const COLOR_STARBUCK = '#036635'

export default function Account() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Account</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.buttonBody}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Login now</Text>
                    </View>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.textBold}>Notification preferences</Text>
                    <View style={styles.text}>
                        <Text>Inbox message</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: COLOR_STARBUCK }}
                            thumbColor={isEnabled ? "white" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <Text style={styles.textBold}>Help & policies </Text>
                    <View style={styles.text}>
                        <Text style={styles.text1}>Help</Text>
                        <Image source={require('../assets/accountIcon/help.png')} style={styles.image} />                  
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.text1}>Application terms</Text>   
                        <Image source={require('../assets/accountIcon/doc.png')} style={styles.image} />                       
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.text1}>Privacy Statement</Text>       
                        <Image source={require('../assets/accountIcon/lock.png')} style={styles.image} />                    
                    </View>
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
        backgroundColor: COLOR_STARBUCK,
        height: '20%',
        width: '100%',
        alignItems: 'center',
        flex: 2,
        justifyContent: 'center'
    }, textHeader: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white'
    }, body: {
        flex: 6,
        padding: 20
    }, buttonBody: {
        flexDirection: 'row',
        marginBottom: 20
    },
    button: {
        borderRadius: 20,
        backgroundColor: COLOR_STARBUCK,
        borderRadius: 50,
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button1: {
        borderRadius: 20,
        backgroundColor: COLOR_STARBUCK,
        borderRadius: 50,
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    }, buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }, textBold: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom:20,
        marginTop:30
    }, text: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },text1:{marginBottom:20},
    image: {
        height:25,
        width:25,
    }
})


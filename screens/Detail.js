import React from 'react'
import {
    NativeBaseProvider,
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Icon,
    IconButton,
    HStack,
    Divider
} from 'native-base';
import { StyleSheet, View, Image } from 'react-native';
export default function Detail({ navigation }) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <NativeBaseProvider style={styles.container}>
                    <View style={{ flex: 1, alignItems: 'center' }} >
                        <Image source={require('../assets/logo.png')} style={{ height: 200, width: 200, marginTop: 50 }} />
                    </View>
                    <View style={{ flex: 3 }}>
                        <Box
                            safeArea
                            flex={1}
                            p={2}
                            w="90%"
                            mx='auto'
                        >
                            <Heading size="lg" color='#036635'>
                                Sign Up
                            </Heading>
                            <Heading color="muted.400" size="xs">
                                Please enter full information!
                            </Heading>
                            <VStack space={2} mt={5}>
                                <FormControl>
                                    <FormControl.Label _text={{ color: '#036635', fontSize: 'sm', fontWeight: 600 }}>
                                        Email ID
                                    </FormControl.Label>
                                    <Input />
                                </FormControl>
                                <FormControl mb={5}>
                                    <FormControl.Label _text={{ color: '#036635', fontSize: 'sm', fontWeight: 600 }}>
                                        Password
                                    </FormControl.Label>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl mb={5}>
                                    <FormControl.Label _text={{ color: '#036635', fontSize: 'sm', fontWeight: 600 }}>
                                        Enter the password again!
                                    </FormControl.Label>
                                    <Input type="password" />
                                </FormControl>
                                <VStack space={2}>
                                    <Button style={{ backgroundColor: '#036635' }} _text={{ color: 'white' }}>
                                        Sign Up Now
                                    </Button>
                                    <HStack justifyContent="center">
                                        <Text fontSize='sm' color='#036635' fontWeight={400}>If you have accout back to  </Text>
                                        <Link _text={{ color: '#036635', bold: true, fontSize: 'sm' }} onPress={() => navigation.navigate('Home')}>
                                            Login
                                        </Link>
                                    </HStack>
                                </VStack>
                            </VStack>
                        </Box>
                    </View>
                </NativeBaseProvider>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
})

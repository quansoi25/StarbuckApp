import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
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
import { StyleSheet,View,Image } from 'react-native';
export default function Category({navigation}) {
    return (
        <NativeBaseProvider style={styles.container}>
            <View style={{flex: 1,alignItems: 'center'}} >
                <Image source={require('../assets/logo.png')} style={{height:200,width:200,marginTop:50}}/>
            </View>
            <View style={{flex:3}}>
            <Box
                safeArea
                flex={1}
                p={2}
                w="90%"
                mx='auto'
            >
                <Heading size="lg" color='#036635'>
                    Welcome
                </Heading>
                <Heading color="muted.400" size="xs">
                    Sign in to continue!
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
                        <Link
                            _text={{ fontSize: 'xs', fontWeight: '700', color: '#036635' }}
                            alignSelf="flex-end"
                            mt={1}
                        >
                            Forget Password?
                        </Link>
                    </FormControl>
                    <VStack space={2}>
                        <Button style={{backgroundColor:'#036635'}} _text={{ color: 'white' }}>
                            Login
                        </Button>
                        <Button style={{backgroundColor:'#036635'}} _text={{ color: 'white' }} onPress={()=>navigation.navigate('BottomTab')}>
                         Skip login
                        </Button>

                        <HStack justifyContent="center" alignItem='center'>
                            <IconButton
                                variant='unstyled'
                                startIcon={
                                    <Icon
                                        as={< MaterialCommunityIcons name="facebook" />}
                                        color='#036635'
                                        size='sm'
                                    />
                                }
                            />
                            <IconButton
                                variant='unstyled'
                                startIcon={
                                    <Icon
                                        as={< MaterialCommunityIcons name="google" />}
                                        color='#036635'
                                        size="sm"
                                    />
                                }
                            />
                            <IconButton
                                variant='unstyled'
                                startIcon={
                                    <Icon
                                        as={< MaterialCommunityIcons name="github" />}
                                        color='#036635'
                                        size="sm"
                                    />
                                }
                            />
                        </HStack>
                    </VStack>
                    <HStack justifyContent="center">
                        <Text fontSize='sm' color='#036635' fontWeight={400}>I'm a new user. </Text>
                        <Link _text={{ color: '#036635', bold: true, fontSize: 'sm' }} onPress={() =>navigation.navigate('Details')}>
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
            </View>
        </NativeBaseProvider>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,

    }
})
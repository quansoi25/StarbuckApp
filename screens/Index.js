import React from 'react'
import { View, Image, StyleSheet, ScrollView,TouchableOpacity } from 'react-native'
import { Container, Heading, NativeBaseProvider, Center, Button, Box, List, Stack, Text } from 'native-base';

const COLOR_STARBUCK = '#036635'
export default function index({navigation}) {
    return (
        <View style={styles.container}>
            <NativeBaseProvider>
                <Center flex={1}>
                    <Container>
                        <Image source={require('../assets/logo.png')} style={{ height: 100, width: 100 }} />
                        <Heading>
                            It's not just Coffee It's <Text></Text>
                            <Heading color={COLOR_STARBUCK}>
                                Starbucks
                            </Heading>
                        </Heading>
                    </Container>
                </Center>
                <Stack space={3} alignItems="center" style={styles.listCategory} flex={2}>
                    <Stack direction='row' space={3} alignItems="center">
                        <TouchableOpacity onPress={() =>navigation.navigate('Food') }>
                        <View style={styles.categoryBox}>
                            <Text style={styles.categoryText}>Food</Text>
                            <Image source={require('../assets/bread.png')} style={styles.imgCategory} />
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>navigation.navigate('Drink') }>
                        <View style={styles.categoryBox}>
                            <Text style={styles.categoryText}>Drinks</Text>
                            <Image source={require('../assets/bubble-tea.png')} style={styles.imgCategory} />
                        </View>
                        </TouchableOpacity>
                    </Stack>
                    <Text style={{ fontSize: 30, color: 'white' }}>Welcome</Text>
                    <ScrollView horizontal={true} vertical={true} showsHorizontalScrollIndicator={false} >
                        <Stack direction='row' space={3} >
                            <Box
                                bg="white"
                                p={4}
                                _text={{
                                    fontSize: "md",
                                    fontWeight: "bold",
                                    color: "black",

                                }}
                                borderRadius={20}
                                flexDirection="row"
                                justifyContent='space-between'
                                style={{ backgroundColor: '#ebdbc8', alignItems: 'center' }}
                            >
                                <Image source={require('../assets/news/news1.png')} style={styles.imgNews} />
                                <View >
                                    <Text bold>{"\n"}WELCOME BACK, PUMPKIN
                                        {"\n"}</Text>
                                    <Button
                                        size="xs"
                                        
                                        onPress={() => console.log("hello world")}
                                        style={{ margin: 20,backgroundColor:COLOR_STARBUCK}}
                                    >
                                        Discover fall flavors
                                    </Button>
                                </View>

                            </Box>
                            <Box
                                bg="white"
                                p={4}
                                _text={{
                                    fontSize: "md",
                                    fontWeight: "bold",
                                    color: "black",

                                }}
                                borderRadius={20}
                                flexDirection="row"
                                justifyContent='space-between'
                                style={{ backgroundColor: '#ebdbc8', alignItems: 'center' }}
                            >
                                <Image source={require('../assets/news/news2.png')} style={styles.imgNews} />
                                <View >
                                    <Text bold>{"\n"}PERFECTLY SPICED OH, SO NICE
                                        {"\n"}</Text>
                                    <Button
                                        size="xs"
                                        colorScheme="secondary"
                                        onPress={() => console.log("hello world")}
                                        style={{ margin: 20,backgroundColor:COLOR_STARBUCK }}
                                    >
                                        Order now
                                    </Button>
                                </View>

                            </Box>
                            <Box
                                bg="white"
                                p={4}
                                _text={{
                                    fontSize: "md",
                                    fontWeight: "bold",
                                    color: "black",

                                }}
                                borderRadius={20}
                                flexDirection="row"
                                justifyContent='space-between'
                                style={{ backgroundColor: '#d4e9e2', alignItems: 'center' }}
                            >
                                <Image source={require('../assets/news/news3.png')} style={styles.imgNews} />
                                <View >
                                    <Text bold>{"\n"}Fall into an easier routine
                                        {"\n"}</Text>
                                    <Button
                                        size="xs"
                                        colorScheme="secondary"
                                        onPress={() => console.log("hello world")}
                                        style={{ margin: 20,backgroundColor:COLOR_STARBUCK }}
                                    >
                                        See pickup options
                                    </Button>
                                </View>

                            </Box>
                        </Stack>
                    </ScrollView>
                    <View style={{ backgroundColor: 'white', flex: 5 }}>

                    </View>
                </Stack>

            </NativeBaseProvider>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        flex: 1,
        justifyContent: "center",
        position: 'relative'
    },
    listCategory: {
        flex: 2,
        backgroundColor: COLOR_STARBUCK,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 10
    },
    categoryBox: {
        backgroundColor: 'white',
        height: 100,
        width: 150,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    categoryText: {
        textAlign: "left",
        fontSize: 20,
        lineHeight: 84,
        marginLeft: 10,
        marginTop: 6,
    },
    imgCategory: {
        marginTop: 15,
        height: 50,
        width: 50,
    },
    newsList: {
        flexDirection: 'row',
    },
    news: {
        backgroundColor: 'white',
        height: 100,
        width: 100,
        borderRadius: 20,
        alignItems: 'center',
    },
    imgNews: {
        height: 200,
        width: 200,
    }

})

import React, { useState } from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Home = ({ navigation }) => {
    const width = Dimensions.get('screen');
    const Donation = [
        { key: "cloth1", img: require("../assets/Image/Cloth/cloth1.jpg"), location: "Kandiwali East" },
        { key: "shoe1", img: require("../assets/Image/Shoes/shoe.jpg"), location: "Kandiwali West" },
        { key: "shoe2", img: require("../assets/Image/Shoes/shoe2.jpg"), location: "Borivali East" },
        { key: "shoe3", img: require("../assets/Image/Shoes/shoe3.jpg"), location: "Mira Road East" },
        { key: "shoe4", img: require("../assets/Image/Shoes/shoe4.jpg"), location: "Bhayander East" },
        { key: "shoe5", img: require("../assets/Image/Shoes/shoe5.jpg"), location: "Bhayander West" },
        { key: "toy10", img: require("../assets/Image/Toy/toy10.jpg"), location: "Naya Gaon" },
        { key: "shoe7", img: require("../assets/Image/Shoes/shoe7.jpg"), location: "Vasai East" },
        { key: "shoe8", img: require("../assets/Image/Shoes/shoe8.jpg"), location: "Nallasopara East" },
        { key: "shoe9", img: require("../assets/Image/Shoes/shoe8.jpg"), location: "Kandiwali East" },
        { key: "toy2", img: require("../assets/Image/Toy/toy2.jpg"), location: "Mumbai Central" },
        { key: "shoe6", img: require("../assets/Image/Shoes/shoe6.jpg"), location: "Churchgate" },
        { key: "cloth6", img: require("../assets/Image/Cloth/cloth6.jpg"), location: "Marin Drive" },
        { key: "toy3", img: require("../assets/Image/Toy/toy3.jpg"), location: "Naya Gaon" },
        { key: "toy5", img: require("../assets/Image/Toy/toy5.jpg"), location: "Kandiwali" },
        { key: "shoe10", img: require("../assets/Image/Shoes/shoe10.jpg"), location: "Kandiwali" },
        { key: "toy6", img: require("../assets/Image/Toy/toy6.jpg"), location: "Kandiwali" },
        { key: "toy7", img: require("../assets/Image/Toy/toy7.jpg"), location: "Kandiwali" },
        { key: "cloth2", img: require("../assets/Image/Cloth/cloth2.jpg"), location: "Borivali East" },
        { key: "cloth3", img: require("../assets/Image/Cloth/cloth3.jpg"), location: "Bhayander West" },
        { key: "toy8", img: require("../assets/Image/Toy/toy8.jpg"), location: "Nallasopara East" },
        { key: "toy9", img: require("../assets/Image/Toy/toy9.jpg"), location: "Nallasopara East" },
        { key: "cloth4", img: require("../assets/Image/Cloth/cloth4.jpg"), location: "Borivali East" },




    ];

    const [liked, setLiked] = useState([]);

    const toggleLike = (item) => {
        const index = liked.indexOf(item.key);
        if (index === -1) {
            // Item not found, add it to liked array
            setLiked([...liked, item.key]);
        } else {
            // Item found, remove it from liked array
            const updatedLiked = liked.filter((key) => key !== item.key);
            setLiked(updatedLiked);
        }
    };
    const windowWidth = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                <View style={{ width: 50, height: 50, borderRadius: 99, backgroundColor: "red", justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{ color: "white" }}>Logo</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <MaterialCommunityIcons name="google-maps" size={30} color="black" />
                    <Text>Location name</Text>
                </View>
            </View>
            <ScrollView>
                <FlatList
                    numColumns={2}
                    data={Donation}
                    renderItem={({ item, index }) => {
                        const isLiked = liked.includes(item.key);
                        const bg = isLiked ? "red" : "white";
                        return (
                            <TouchableOpacity
                                style={{ width: "48%", margin: 5, justifyContent: "center", alignItems: 'center', borderColor: "grey", borderWidth: 1 }}
                            onPress={() => navigation.navigate("Cummunication", item)}
                            >
                                <Image
                                    source={item.img}
                                    resizeMode='cover'
                                    style={{
                                        width: '100%',
                                        height: 110,
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', position: "absolute", top: 1, right: 8, backgroundColor: "rgba(0,0,0,.1)", borderRadius: 100, width: 40, height: 40 }}>
                                    <TouchableOpacity onPress={() => toggleLike(item)}>
                                        <MaterialCommunityIcons name="heart" size={30} color={bg} />
                                    </TouchableOpacity>
                                    {/* <TouchableOpacity>
                                    <MaterialCommunityIcons name="comment" size={30} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("Chat", item)}>
                            </TouchableOpacity> */}
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: '100%', paddingHorizontal: 10, paddingVertical: 15 }}>

                                    <MaterialCommunityIcons name="google-maps" size={30} color="black" />
                                    <Text>{item.location}</Text></View>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});

import React, { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Home = () => {
    const width = Dimensions.get('screen');
    const Donation = [
        { key: "cloth1", img: require("../assets/Image/Cloth/cloth1.jpg") },
        { key: "cloth2", img: require("../assets/Image/Cloth/cloth2.jpg") },
        { key: "cloth3", img: require("../assets/Image/Cloth/cloth3.jpg") },
        { key: "cloth4", img: require("../assets/Image/Cloth/cloth4.jpg") },
        { key: "cloth6", img: require("../assets/Image/Cloth/cloth6.jpg") },
    ];

    const [liked, setLiked] = useState(false);
    console.log("check",liked)

    const changeColor = (item) => {
      
       setLiked(item)
       setLiked(!liked)
       if(item==="true"){
        console.log("red")
       } else{
        console.log("green")
       }
      
    };

    return (
        <View style={{ margin: 10 }}>
            <View>
                <FlatList
                    data={Donation}
                    renderItem={({ item, index }) => {
                        return (
                            <View 
                                key={index}
                                style={{ margin: 5, borderRadius: 20 }}>
                                <View style={{ backgroundColor: "black", margin: 5, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 15 }}>
                                    <View style={{}}>
                                        <TouchableOpacity style={{ justifyContent: "flex-end", alignItems: 'flex-end' }}>
                                            <MaterialCommunityIcons name="dots-vertical" size={30} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                    <Image
                                        source={item.img}
                                        resizeMode='cover'
                                        style={{ height: 300, width: width, borderRadius: 10, marginBottom: 5, marginTop: 5 }} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={()=>changeColor(item)}
                                            style={{ justifyContent: "flex-end", alignItems: 'flex-end' }}>
                                            <MaterialCommunityIcons name="heart" size={30} color={liked==="true"?"red":"white"} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ justifyContent: "flex-end", alignItems: 'flex-end' }}>
                                            <MaterialCommunityIcons name="comment" size={30} color="white" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ justifyContent: "flex-end", alignItems: 'flex-end' }}>
                                            <MaterialCommunityIcons name="share" size={30} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});

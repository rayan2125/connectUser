import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';

const Cummunication = ({ route }) => {
const navigation= useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: "red", height: "60%" }}>
                <ImageBackground source={route.params.img} style={{ height: "100%", width: "100%" }} resizeMode='cover'>
                    <TouchableOpacity  
                    onPress={()=>navigation.pop()}
                    style={{marginHorizontal:15,top:10}}>

                    <Icon name="arrow-left" size={30} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={{ margin: 10 }}>

                <Text>{route.params.location}</Text>
            </View>
            <View style={{ justifyContent: "flex-end", flex: 1, }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>

                    <TouchableOpacity style={{
                        backgroundColor: 'blue', width: "47%", borderRadius: 10,
                        margin: 5, justifyContent: "center", alignItems: "center",
                        flexDirection: "row",
                        paddingVertical: 10, paddingHorizontal: 10
                    }}>
                        <MaterialCommunityIcons name="chat" color="white" size={20} />
                        <Text style={{ color: "white", marginHorizontal: 10 }}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: 'blue', width: "47%", borderRadius: 10,
                        flexDirection: "row",
                        margin: 5, justifyContent: "center", alignItems: "center",
                        paddingVertical: 10, paddingHorizontal: 10
                    }}>
                        <MaterialCommunityIcons name="phone" color="white" size={20} />
                        <Text style={{ color: "white", marginHorizontal: 10 }}>Call</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Cummunication

const styles = StyleSheet.create({})
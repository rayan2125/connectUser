import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'

import Icon from "react-native-vector-icons/FontAwesome5";

import { data } from '../../assets/DummyJSON/user';
import { Donation } from '../../assets/DummyJSON/Donation';
import { useSelector } from 'react-redux';

const Profile = ({ navigation }) => {
    const numColumns = 3
    const donationsData = useSelector((state) => state.reducer.donate.donations);
    console.log("checking",donationsData)
    return (
        <>

            <View style={{ flex: 1, position: "relative" }}>
                <View style={{ backgroundColor: "#14213d", height: 110, width: '100%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, alignItems: "flex-end" }}>
                    <TouchableOpacity style={{ margin: 20 }}>

                        <Icon name="pen"
                            size={20}
                            color="white"

                        />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", bottom: 60 }}>
                    <View style={{ height: 100, width: 100, borderRadius: 100, backgroundColor: "#e5e5e5", justifyContent: "center", alignItems: "center" }}>
                        <Image
                            source={require("../../assets/Image/user.png")}
                            resizeMode='contain'
                            style={{ height: 100, width: 100, borderRadius: 99 }} />

                    </View>
                    <Text style={{ color: "#14213d", fontSize: 20, fontWeight: '400' }}>Ramesh Bana</Text>
                    <Text style={{ marginHorizontal: -20 }}>bhayander East 401105</Text>
                </View>

            </View>
            <View style={{}}>
                <FlatList
                    data={donationsData}
                    numColumns={numColumns}
                    renderItem={({ item, index }) => {
                        console.log("data",item)
                        
                       return(
                        <View style={{width:"33%",paddingHorizontal:10,borderRadius:15,padding:2}}>
                            <Image source={{ uri: item.a }}
                            resizeMode='contain'
                            style={{height:150,width:"100%",}}
                          />
                        </View>
                       )
                    }} />

                
            </View>

            <View style={{ margin: 5 }}>
                <TouchableOpacity
                    //   onPress={handleLogout}
                    style={{ height: 50, justifyContent: "center", alignItems: 'center', backgroundColor: "#14213d", borderRadius: 8 }}>

                    <Text style={{ color: 'white' }}>Log Out</Text>

                </TouchableOpacity>
            </View>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({})
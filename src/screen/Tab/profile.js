import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'

import Icon from "react-native-vector-icons/FontAwesome5";

import { data } from '../../assets/DummyJSON/user';
import { Donation } from '../../assets/DummyJSON/Donation';

const Profile = ({ navigation }) => {
    const numColumns = 3

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
            <View style={{ margin: 5, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: "#e5e5e5", zIndex: 9, elevation: 9, borderRadius: 10 }}>
                <FlatList
                    data={Donation}
                    numColumns={numColumns}
                    renderItem={({ item, index }) => {
                        
                        
                       return(
                        <View style={{backgroundColor:'blue'}}>
                            <Image source={item.img}
                            resizeMode='contain'
                            style={{height:50,width:50}}
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
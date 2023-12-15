import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Donate = () => {
    const navigation = useNavigation()
    const data = ["Book", "Shoes", "Food", "Cloths", "Phone", "Other"];

    const renderSeparator = () => <Divider style={styles.separator} />;

    const renderVerticalSeparator = () => <Divider style={styles.verticalSeparator} />;
const handleNavigation=(item)=>{
    navigation.navigate("UploadDonation",item)
}
    return (
        <>
         <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center",paddingHorizontal:10,paddingVertical:10 }}>
                  <TouchableOpacity>

                    <Text style={{ fontSize: 29, color: "#14213d" }}>X</Text>
                  </TouchableOpacity>
                    <Text style={{ fontSize: 20, color: "#14213d" }}>What you are donating ?</Text>
                </View>
                <Divider bold="true"/>
            <View style={styles.container}>
               
                <FlatList
                    numColumns={2}
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <>
                                <TouchableOpacity 
                                onPress={()=>handleNavigation(item)}
                                style={[styles.itemContainer, {
                                    justifyContent: 'center',
                                }]}>
                                    <MaterialCommunityIcons name={
                                        item === "Book" ? "book" :
                                        item==="Shoes"? "shoe-formal":
                                        item==="Food"?"food":
                                        item==="Cloths"?"tshirt-crew":
                                        item==="Phone"?"phone":
                                        item==="Other"?"drag":''
                                        } size={40} color="#14213d" />
                                    <Text style={{ color: "#14213d", fontSize: 20 }}>{item}</Text>
                                </TouchableOpacity>

                            </>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={renderSeparator}
                />
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemContainer: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    separator: {
        height: 1,
        backgroundColor: 'gray',
    },
    verticalSeparator: {
        height: '100%',
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'gray',
    },
});

export default Donate;

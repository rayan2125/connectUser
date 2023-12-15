import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import { Divider, TextInput } from 'react-native-paper'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { addDonation } from '../redux/Reduces/donatReduces'
const UploadDonation = () => {
   
    //data
const dispatch = useDispatch()
const donationsData = useSelector((state) => state.reducer.donate.donations);
console.log(donationsData,"checking")

    const cam = [
        { id: "1", name: "Click a Photo", iconName: "camera" },
        { id: "2", name: "Upload the Photo", iconName: "image" },
    ]
    // function
    const handleImages = (item) => {

        const options = {
            mediaType: 'photo',

            maxHeight: 2000,
            maxWidth: 2500,
        };
        if (item.id === "1") {
            launchCamera(options, response => {

                if (response.didCancel) {
                    console.log('User cancelled camera');
                } else if (response.error) {
                    console.log('Camera Error: ', response.error);
                } else {
                    let imageUri = response.uri || response.assets?.[0]?.uri;
                    setImagData(imageUri)

                }
            });
        } else {
            launchImageLibrary(options, response => {

                if (response.didCancel) {
                    console.log('User cancelled camera');
                } else if (response.error) {
                    console.log('Camera Error: ', response.error);
                } else {
                    let imageUri = response.uri || response.assets?.[0]?.uri;
                    setImagData(imageUri)

                }
            });
        }

    }
   
    
    

    const handleSumbit = async () => {
        let error = {};
        if (imagData === null) {
            error.image = "Please upload an image";
        }
        if (state.location.trim() === "") {
            error.location = "Please enter a location";
        }
    
        if (Object.keys(error).length > 0) {
            setErrors(error);
        } else {
            setErrors({});
            Alert.alert("Submit Data");
            try {
                const data = {
                    a: imagData,
                    b: state.location
                };
                dispatch(addDonation(data))
                // const stringifiedData = JSON.stringify(data); 
                // await AsyncStorage.setItem("Donate", stringifiedData);
               
            } catch (error) {
                console.log(error);
            }
        }
    };
    

    /// state
    const [imagData, setImagData] = useState(null)
    
    const [state, setState] = useState({
        location: '',

    })
   
    const [errors, setErrors] = useState({})
   

    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start",height:50 }}>
                <Icon name="arrow-left" />
                <Text>UploadDonation</Text>
                <Divider bold="true"/>
            </View>
            <View>
                <View style={{ margin: 5, justifyContent: "center" }}>
                    {
                        imagData === null ?
                            <FlatList
                                data={cam}
                                renderItem={({ item, index }) => {
                                    return (
                                        <>
                                            <TouchableOpacity
                                                onPress={() => handleImages(item)}
                                                key={index}
                                                style={{
                                                    margin: 5,
                                                    paddingVertical: 10, paddingHorizontal: 10,
                                                    backgroundColor: "#14213d", justifyContent: "center", alignItems: "center", flexDirection: "row"
                                                }}>
                                                <Icon name={item.iconName} color="white" />
                                                <Text style={{ color: "white" }}>{item.name}</Text>
                                            </TouchableOpacity>
                                            <Text style={{ color: "red" }}>{errors.image}</Text>
                                        </>
                                    )
                                }} />
                            : <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <Image
                                    source={{ uri: imagData }}
                                    resizeMode='contain'
                                    style={{ height: 150, width: 300 }} />
                                <TouchableOpacity onPress={() => setImagData(null)} style={{
                                    marginTop: 10, marginBottom: 10,
                                    backgroundColor: "red", width: '70%',
                                    borderRadius: 10, justifyContent: "center", alignItems: "center",
                                    paddingVertical: 10, paddingHorizontal: 10
                                }}>
                                    <Text style={{ color: "white" }}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                    }

                    <TextInput
                        onChangeText={(text) => setState({ ...state, location: text })}

                        mode='outlined'
                        label="Location"
                        placeholder='Enter Your Location' />
                    <Text style={{ color: "red" }}>{errors.location}</Text>
                    <View style={{ justifyContent: "flex-end", top: 10 }}>
                        <TouchableOpacity
                            onPress={handleSumbit}
                            style={{ backgroundColor: "green", paddingVertical: 10, paddingHorizontal: 10, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white" }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default UploadDonation

const styles = StyleSheet.create({})
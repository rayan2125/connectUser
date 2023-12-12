import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../../component/customTextInput'
import SubmitBtn from '../../component/submitBtn';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation()
    const [fields, setFields] = useState([
        { key: 'email', title: 'Email', placeholder: 'Enter Email' },
        { key: 'password', title: 'Password', placeholder: 'Enter Password' }]
    );
    const [btn, setBtn] = useState([
        { key: 'login', title: 'Login', bgColor: "#FF8651" },
        { key: 'register', title: 'Register', bgColor: "#9a031e" }
    ]);

    const handleSubmit = (feild) => {
        navigation.navigate("Home")
    }

    return (

        <View style={{ margin: 5, justifyContent: "center", flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
                <Image
                    source={require("../../assets/Image/Logo.png")}
                    resizeMethod='contain'
                    style={{ height: 100, width: 100, borderRadius: 99 }} />
            </View>
            {
                fields.map((field, index) => {
                    return (
                        <CustomTextInput
                            key={index}
                            label={field.title}
                            placeholder={field.placeholder}
                        />
                    )
                })
            }
            <TouchableOpacity style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>

                <Text style={{ color: "#FF8651", }}>Forgot Password</Text>
            </TouchableOpacity>
            <View></View>
            {
                btn.map((field, index) => {
                    return (
                        <SubmitBtn
                            onPress={() => handleSubmit(field)}
                            title={field.title}
                            bgColor={field.bgColor}
                        />
                    )
                })
            }

        </View>
    )
}

export default Login

const styles = StyleSheet.create({})
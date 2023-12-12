import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SubmitBtn = ({title,onPress,bgColor}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={{
            backgroundColor: bgColor,
            marginTop: 7,
            marginBottom:7, 
            height: 50, borderRadius: 17, paddingHorizontal: 8,
            paddingVertical: 9, justifyContent: "center", alignItems: "center"
        }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: '500' }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default SubmitBtn

const styles = StyleSheet.create({})
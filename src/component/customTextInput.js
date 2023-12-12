import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const CustomTextInput = ({placeholder,label}) => {
  return (
    <View style={{marginTop:8,marginBottom:8}}>
     <TextInput
     mode='outlined'
    placeholder={placeholder} 
    label={label}
     />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { io } from "socket.io-client";

const Chat = ({ route }) => {
  
  return (
    <View style={{ margin: 5, justifyContent: "flex-end", flex: 1 }}>
      <View >
        
        <TextInput
          mode='outlined' />
      </View>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})
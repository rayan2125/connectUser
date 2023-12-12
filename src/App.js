import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import IndexNaviagtion from './navigation'

const App = () => {
  return (
   <NavigationContainer>
    <IndexNaviagtion/>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
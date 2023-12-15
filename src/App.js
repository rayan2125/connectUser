import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import IndexNaviagtion from './navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore,   } from 'redux-persist'
import Store from './redux/store'


const App = () => {
  let persistor = persistStore(Store)
  return (
   
  
<Provider store={Store}>
<PersistGate persistor={persistor}>
   <NavigationContainer>
    <IndexNaviagtion/>
   </NavigationContainer>
   </PersistGate>
</Provider>
   
  )
}

export default App

const styles = StyleSheet.create({})
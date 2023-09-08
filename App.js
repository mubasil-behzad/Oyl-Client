import React from 'react'
import Navigation from './src/navigation'
import { SafeAreaView } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { appStyles } from './src/services/'

const App = () => {
  Orientation.lockToPortrait();
  return (
    <SafeAreaView style={appStyles.mainContainer}>
      <Navigation />
    </SafeAreaView>
  )
}

export default App
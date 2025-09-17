import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Switcher from './components/Switcher';

const backgrounds = [
  require('../assets/images/andrew.png'),
  require('../assets/images/sunshine.jpg'),
];

export default function App() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <ImageBackground
      source={isSwitchOn ? backgrounds[0] : backgrounds[1]}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Switcher value={isSwitchOn} onToggle={() => setIsSwitchOn(!isSwitchOn)} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
     flex: 1,
      width: '100%',
      height: '100%'
    },
  container: {
     flex: 1, justifyContent: 'center', alignItems: 'center' 
    },
});
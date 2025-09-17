import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Switcher from './components/Switcher';

const backgrounds = [
  require('../assets/images/andrew.png'),
  require('../assets/images/sunshine.jpeg'),
];

export default function App() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <ImageBackground
      source={isSwitchOn ? backgrounds[1] : backgrounds[0]}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Switcher value={isSwitchOn} onToggle={() => setIsSwitchOn(!isSwitchOn)} />
        {/* ...other app content... */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
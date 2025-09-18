import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import Switcher from './components/Switcher';

const backgrounds = [
  require('../assets/images/black.jpg'),
  require('../assets/images/white.jpg'),
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
        <Text
          style={[
            styles.textStyle,
            { color: isSwitchOn ? 'white' : 'black' }
          ]}
        >
          {isSwitchOn ? 'Dark Mode' : 'Light Mode'}
        </Text>
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
    textStyle: {
      fontSize: 100,
      fontWeight: 'bold',
      marginBottom: 30,
      textAlign: 'center',
    },
    switchStyle: {
      transform: [{ scaleX: 2 }, { scaleY: 2 }],
      marginTop: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: 20,
      padding: 10,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
      borderWidth: 1,
      borderColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
    }
});
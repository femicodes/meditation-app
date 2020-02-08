import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import Navigator from './src/navigation';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      'sf-pro': require('./assets/SFPro-Regular.ttf'),
    }).then(() => setFontLoaded(true))
  });

  if (!fontLoaded) {
    return <View />
  }

  return (
    <Navigator />
  );
}
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import Navigator from './src/navigation';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      'circular': require('./assets/CircularStd-Book.ttf'),
    }).then(() => setFontLoaded(true))
  });

  if (!fontLoaded) {
    return <View />
  }

  return (
    <Navigator />
  );
}
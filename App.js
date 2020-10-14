import React, { useEffect, useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import customFonts from './app/config/fonts';
// import AppNavigator from './app/navigation/AppNavigator';
import cache from './app/utility/cache';
import { navigationRef } from './app/navigation/rootNavigation';
import AuthNavigator from './app/navigation/AuthNavigator';
import { Theme } from './app/components';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitalState] = useState();
  const [fontsLoaded, setfontsLoaded] = useState(false);

  const loadFontsAsync = async () => {
    await Promise.all([Font.loadAsync(customFonts)], () => setfontsLoaded(true));
  };

  useEffect(() => {
    loadFontsAsync();
  });

  const restoreState = async () => {
    try {
      const state = (await cache.get(PERSISTENCE_KEY)) || undefined;

      setInitalState(state);
    } finally {
      setIsReady(true);
    }

    if (!isReady) restoreState();
  };

  useEffect(() => {
    restoreState();
  }, [isReady]);

  const onStateChange = useCallback((PERSISTENCE_KEY, state) => {
    cache.store(PERSISTENCE_KEY, state), [];
  });

  if (!fontsLoaded || !isReady)
    return (
      <AppLoading
        startAsync={loadFontsAsync}
        onFinish={() => {
          setfontsLoaded(true);
          setIsReady(true);
        }}
        onError={console.warn}
      />
    );

  return (
    <Theme>
      <NavigationContainer ref={navigationRef} {...{ initialState, onStateChange }}>
        <AuthNavigator />
      </NavigationContainer>
    </Theme>
  );
}

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";

import { Theme } from "./app/components";
import useLoadAssets from "./app/hooks/useLoadAssets";
// import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from "./app/navigation/AppNavigator";
import { navigationRef } from "./app/navigation/rootNavigation";
import cache from "./app/utility/cache";

const PERSISTENCE_KEY = "NAVIGATION_STATE";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitalState] = useState();
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();

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

  const onStateChange = (PERSISTENCE_KEY, state) =>
    cache.store(PERSISTENCE_KEY, state);

  if (!assetsLoaded || !isReady)
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );

  return (
    <Theme>
      <NavigationContainer
        ref={navigationRef}
        {...{ initialState, onStateChange }}
      >
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </Theme>
  );
}

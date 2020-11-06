import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

import { fonts, images } from '../config/assets';

const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const useLoadAssets = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages(images);

    await Promise.all([Font.loadAsync(fonts), ...imageAssets]);
    setAssetsLoaded(true);
  };

  useEffect(() => {
    loadAssetsAsync();
  });

  return { assetsLoaded, setAssetsLoaded, loadAssetsAsync };
};

export default useLoadAssets;

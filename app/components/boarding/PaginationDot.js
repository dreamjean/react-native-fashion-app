import React from 'react';
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';

import colors from '../../config/colors';

const PaginationDot = ({ index, currentIndex }) => {
  let opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  let scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        opacity,
        height: 8,
        width: 8,
        borderRadius: 4,
        margin: 6,
        backgroundColor: colors.primary,
        transform: [{ scale }],
      }}
    />
  );
};

export default PaginationDot;

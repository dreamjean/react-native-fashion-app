import React from 'react';
import Animated, { Extrapolate, interpolateNode } from 'react-native-reanimated';

import { colors } from '../../config';

const PaginationDot = ({ index, currentIndex }) => {
  let opacity = interpolateNode(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.3, 1, 0.3],
    extrapolate: Extrapolate.CLAMP,
  });

  let scale = interpolateNode(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
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

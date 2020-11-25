import React from 'react';
import Animated, { Extrapolate, interpolateNode } from 'react-native-reanimated';

import IconButton from '../../IconButton';

const RightAction = ({ topPress, bottomPress, dragX, progress }) => {
  const scale = interpolateNode(progress, {
    inputRange: [0, 80],
    outputRange: [1, dragX],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={[
        {
          width: 60,
          justifyContent: 'space-around',
          padding: 12,
          alignItems: 'center',
          backgroundColor: 'cyan',
        },
        { transform: [{ scale }] },
      ]}
    >
      <IconButton backgroundColor="blue" size={24} iconName="plus" onPress={topPress} />
      <IconButton backgroundColor="red" size={24} iconName="minus" onPress={bottomPress} />
    </Animated.View>
  );
};

export default RightAction;

import React from 'react';
import { StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { add, Extrapolate, interpolateNode } from 'react-native-reanimated';
import { mix, mixColor, usePanGestureHandler } from 'react-native-redash/lib/module/v1';
import styled from 'styled-components';

import runSpring from '../../../animated/runSpring';
import { calendar, colors } from '../../../config';

const { width, CARD_WIDTH, CARD_HEIGHT } = calendar;

const Card = ({ position, onSwipe, image, step }) => {
  const { gestureHandler, translation, velocity, state } = usePanGestureHandler();

  const backgroundColor = mixColor(position, colors.purple, colors.purple2);

  const scale = mix(position, 1, 0.88);
  const imageScale = interpolateNode(position, {
    inputRange: [0, step],
    outputRange: [1, 0.75],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateYOffset = mix(position, 0, -50);

  const translateX = runSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-width, 0, width],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });

  const translateY = add(
    translateYOffset,
    runSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    })
  );

  return (
    <Wrapper>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[
            {
              backgroundColor,
              borderRadius: 24,
              height: CARD_HEIGHT,
              width: CARD_WIDTH,
              alignItems: 'center',
              justifyContent: 'flex-end',
              transform: [{ translateY }, { translateX }, { scale }],
            },
          ]}
        >
          <Animated.Image
            style={{
              width: 260,
              height: 360,
              transform: [{ scale: imageScale }],
            }}
            source={image}
          />
        </Animated.View>
      </PanGestureHandler>
    </Wrapper>
  );
};

const Wrapper = styled.View({
  ...StyleSheet.absoluteFill,
  justifyContent: 'center',
  alignItems: 'center',
});

export default Card;

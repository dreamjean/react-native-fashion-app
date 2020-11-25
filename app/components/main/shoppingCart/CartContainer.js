import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import styled from 'styled-components';

import { calendar, colors } from '../../../config';
import FocusAwareStatusBar from '../../FocusAwareStatusBar';

const { CELL_NUM, CART_HEIGHT, CART_MIN_HEIGHT, width } = calendar;

const snapPoints = [-(CART_HEIGHT - CART_MIN_HEIGHT), 0];

const CartContainer = ({ children }) => {
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      const clamp = (value, min, max) => {
        return Math.min(Math.max(value, min), max);
      };
      translateY.value = clamp(ctx.startY + event.translationY, snapPoints[0], snapPoints[1]);
    },
    onEnd: (event) => {
      const snapPoint = (value, velocity, points) => {
        'worklet';
        const point = value + 0.2 * velocity;
        const deltas = points.map((p) => Math.abs(point - p));
        const minDelta = Math.min.apply(null, deltas);
        return points.filter((p) => Math.abs(point - p) === minDelta)[0];
      };
      const dest = snapPoint(translateY.value, event.velocityY, snapPoints);

      translateY.value = withSpring(dest, { velocity: event.velocityY });
    },
  });

  const stylez = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Container>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            {
              backgroundColor: colors.white,
              borderBottomLeftRadius: CELL_NUM,
              borderBottomRightRadius: CELL_NUM,
              position: 'absolute',
              left: 0,
              right: 0,
              height: CART_HEIGHT,
              top: 0,
            },
            stylez,
          ]}
        >
          {children}
          <Knob />
        </Animated.View>
      </PanGestureHandler>
      <FocusAwareStatusBar style="light" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.secondary,
  })}
`;

const Knob = styled.View`
  align-self: center;
  justify-content: flex-end;
  position: absolute;
  width: ${width * 0.18}px;
  height: 5px;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.grey,
    borderRadius: radii.s1,
    bottom: space.m2,
  })}
`;

export default CartContainer;

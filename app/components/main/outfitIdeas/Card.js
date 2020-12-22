import React from 'react';
import { StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { mix, mixColor, snapPoint } from 'react-native-redash';
import styled from 'styled-components';

import { calendar, colors } from '../../../config';

const { width, CARD_WIDTH, CARD_HEIGHT } = calendar;
const snapPoints = [-width, width];
const timingConfig = {
  duration: 240,
  easing: Easing.bezier(0.33, 0.01, 0, 1),
};

const Card = ({ image, step, onSwipe, position }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const imgOpacity = useSharedValue(1);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = ctx.x + translationX;
      translateY.value = ctx.y + translationY;

      scale.value = interpolate(
        translateY.value,
        [-200, 0, 200],
        [0.65, 1, 0.65],
        Extrapolate.CLAMP
      );

      imgOpacity.value = interpolate(
        translateY.value,
        [-100, 0, 100],
        [0.6, 1, 0.6],
        Extrapolate.CLAMP
      );
    },
    onEnd: ({ velocityX, velocityY }) => {
      if (Math.abs(translateX.value) < 180) {
        translateX.value = 0;
        translateY.value = 0;

        imgOpacity.value = withTiming(1, timingConfig);
      } else {
        translateY.value = withSpring(0, { velocity: velocityY });
        const dest = snapPoint(translateX.value, velocityX, snapPoints);
        translateX.value = withSpring(
          dest,
          {
            overshootClamping: true,
            restSpeedThreshold: 100,
            restDisplacementThreshold: 100,
          },
          runOnJS(onSwipe)()
        );

        imgOpacity.value = withTiming(0.6, timingConfig);
      }
      scale.value = withTiming(1, timingConfig);
    },
  });

  const cardStyle = useAnimatedStyle(() => {
    const backgroundColor = mixColor(position.value, colors.purple, colors.purple2);

    return {
      backgroundColor,
      opacity: imgOpacity.value,
      transform: [
        { translateX: position.value === 0 ? translateX.value : 0 },
        { translateY: position.value === 0 ? translateY.value : mix(position.value, 0, -44) },
        { scale: position.value === 0 ? scale.value : mix(position.value, 1, 0.9) },
      ],
    };
  });

  const stylei = useAnimatedStyle(() => {
    const scale = interpolate(position.value, [0, step], [1, 0.75], Extrapolate.CLAMP);
    return {
      transform: [
        {
          scale,
        },
      ],
    };
  });

  return (
    <Wrapper>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              borderRadius: 24,
              height: CARD_HEIGHT,
              width: CARD_WIDTH,
              // backgroundColor: colors.purple2,
              alignItems: 'center',
              justifyContent: 'flex-end',
            },
            cardStyle,
          ]}
        >
          <Animated.Image
            style={[
              {
                width: 260,
                height: 360,
              },
              stylei,
            ]}
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

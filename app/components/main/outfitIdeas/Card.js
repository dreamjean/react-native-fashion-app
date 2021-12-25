import { StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
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
} from "react-native-reanimated";
import { mix, snapPoint } from "react-native-redash";
import styled from "styled-components";

import { constants } from "../../../config";

const { width, CARD_WIDTH, CARD_HEIGHT } = constants;
const snapPoints = [-width, width];
const timingConfig = {
  duration: 240,
  easing: Easing.bezier(0.33, 0.01, 0, 1),
};

const Card = ({ backgroundColor, image, step, onSwipe, position }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

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

      opacity.value = interpolate(
        translateY.value,
        [-100, 0, 100],
        [0.6, 1, 0.6],
        Extrapolate.CLAMP
      );
    },
    onEnd: ({ velocityX, velocityY }) => {
      if (Math.abs(translateX.value) < 150) {
        translateX.value = 0;
        translateY.value = 0;

        opacity.value = withTiming(1, timingConfig);
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

        opacity.value = withTiming(0.6, timingConfig);
      }
      scale.value = withTiming(1, timingConfig);
    },
  });

  const cardStyle = useAnimatedStyle(() => {
    const first = position.value === 0;

    return {
      backgroundColor,
      opacity: opacity.value,
      transform: [
        { translateX: first ? translateX.value : 0 },
        {
          translateY: first ? translateY.value : mix(position.value, 0, -44),
        },
        {
          scale: first ? scale.value : mix(position.value, 1, 0.9),
        },
      ],
    };
  });

  const stylei = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            position.value,
            [0, step],
            [1, 0.75],
            Extrapolate.CLAMP
          ),
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
              alignItems: "center",
              justifyContent: "center",
            },
            cardStyle,
          ]}
        >
          <Animated.Image
            resizeMode="contain"
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
  justifyContent: "center",
  alignItems: "center",
});

export default Card;

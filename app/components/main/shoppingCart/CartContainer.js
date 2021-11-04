import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { clamp, snapPoint } from "react-native-redash";
import styled from "styled-components";

import { colors, constants } from "../../../config";

const { CELL_NUM, CART_HEIGHT, CART_MIN_HEIGHT, width } = constants;

const snapPoints = [-(CART_HEIGHT - CART_MIN_HEIGHT), 0];

const CartContainer = ({ children }) => {
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: ({ translationY }, { startY }) => {
      translateY.value = clamp(
        startY + translationY,
        snapPoints[0],
        snapPoints[1]
      );
    },
    onEnd: ({ velocityY }) => {
      const dest = snapPoint(translateY.value, velocityY, snapPoints);

      translateY.value = withSpring(dest, { velocity: velocityY });
    },
  });

  const stylez = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <PanGestureHandler
      onGestureEvent={gestureHandler}
      avgTouches
      activeOffsetY={[-10, 10]}
    >
      <Animated.View
        style={[
          {
            backgroundColor: colors.white,
            borderBottomLeftRadius: CELL_NUM,
            borderBottomRightRadius: CELL_NUM,
            position: "absolute",
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
  );
};

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

import { Alert } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import styled from "styled-components";

import { constants, theme } from "../../../../config";
import LeftAction from "./LeftAction";
import RightAction from "./RightAction";

const { width, LIST_CARD, RIGHT_ACTION_WIDTH, LEFT_ACTION_WIDTH } = constants;
const { colors, space } = theme;

const rightTranslate = -RIGHT_ACTION_WIDTH;
const snapPoints = [rightTranslate, 0, LEFT_ACTION_WIDTH];

const springConfig = (velocity) => {
  "worklet";

  return {
    stiffness: 100,
    damping: 10,
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 0.4,
    restSpeedThreshold: 1.7,
    velocity,
  };
};

const timingConfig = {
  duration: 400,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
};

const SwipeableRow = ({
  children,
  onRemove,
  numberOfItems,
  onChangeNumberOfItems,
}) => {
  const isRemoving = useSharedValue(false);
  const translateX = useSharedValue(0);

  const handleRemovePress = () => {
    Alert.alert("Remove Item", "Are you share you want to remove this item?", [
      {
        text: "Cancel",
        style: "cancel",
        onPress: () => (translateX.value = withTiming(0, timingConfig)),
      },
      {
        text: "Yes",
        onPress: () => {
          isRemoving.value = true;
          onRemove();
        },
      },
    ]);
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = ctx.x + translationX;
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(dest, springConfig);

      if (translateX.value > RIGHT_ACTION_WIDTH * 3)
        runOnJS(handleRemovePress)();
    },
  });

  const styles = useAnimatedStyle(() => {
    if (isRemoving.value) {
      return {
        height: withTiming(0, timingConfig),
        transform: [
          {
            translateX: withTiming(width, timingConfig),
          },
        ],
      };
    }

    return {
      height: LIST_CARD + space.m2,
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  return (
    <Wrapper>
      <PanGestureHandler
        activeOffsetX={[-10, 10]}
        onGestureEvent={gestureHandler}
      >
        <Animated.View style={[{ backgroundColor: colors.white }, styles]}>
          <LeftBox>
            <LeftAction onPress={handleRemovePress} />
          </LeftBox>
          <RightBox>
            <RightAction
              onAdd={() => onChangeNumberOfItems(numberOfItems++)}
              onMinus={() => {
                onChangeNumberOfItems(numberOfItems--);

                if (numberOfItems === 0) handleRemovePress();
                if (!isRemoving.value && numberOfItems < 0)
                  onChangeNumberOfItems(1);
              }}
            />
          </RightBox>
          {children}
        </Animated.View>
      </PanGestureHandler>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  overflow: hidden;

  /* ${({ theme: { space } }) => ({
    marginTop: space.m2,
  })} */
`;

const LeftBox = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${width}px;
  width: ${width}px;

  ${({ theme: { space } }) => ({
    marginTop: space.m2,
  })}
`;

const RightBox = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${width}px;
  width: ${RIGHT_ACTION_WIDTH}px;

  ${({ theme: { space } }) => ({
    marginTop: space.m2,
  })}
`;

export default SwipeableRow;

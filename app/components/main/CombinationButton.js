import { Alert, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

import { colors, constants, images } from "../../config";
import { Text } from "../../styles";

const { KNOB_WIDTH, KNOB_SLIDE_WIDTH } = constants;
const sliderRange = KNOB_SLIDE_WIDTH - KNOB_WIDTH;
const snapPoints = [0, sliderRange];

const CombinationButton = ({ label, onPay }) => {
  const translateX = useSharedValue(0);
  const paySuccess = useSharedValue(false);

  const onDraggedSuccss = () => {
    Alert.alert("Success!", "Payment Completed", [
      {
        text: "OK",
        onPress: () => {
          onPay();
          translateX.value = 0;
          paySuccess.value = false;
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
      if (translateX.value < sliderRange - 5) translateX.value = 0;
      else {
        const dest = snapPoint(translateX.value, velocityX, snapPoints);
        translateX.value = withSpring(
          dest,
          {
            overshootClamping: true,
            restSpeedThreshold: 100,
            restDisplacementThreshold: 100,
          },
          runOnJS(onDraggedSuccss)()
        );
        paySuccess.value = true;
      }
    },
  });

  const knobStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: translateX.value + KNOB_WIDTH,
    };
  });

  const cartStyle = useAnimatedStyle(() => {
    return {
      opacity: paySuccess.value ? 0 : 1,
    };
  });

  const bagStyle = useAnimatedStyle(() => {
    return {
      opacity: paySuccess.value ? 1 : 0,
    };
  });

  return (
    <View style={styles.container}>
      <Text button>{label}</Text>
      <Animated.View style={[styles.progress, progressStyle]}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.knob, knobStyle]}>
            <View style={styles.wrapper}>
              <Animated.Image
                style={[styles.image, cartStyle]}
                source={images.cart}
              />
              <Animated.Image
                style={[styles.image, bagStyle]}
                source={images.giftBag}
              />
            </View>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: KNOB_SLIDE_WIDTH,
    height: KNOB_WIDTH,
    borderRadius: KNOB_WIDTH / 2,
    justifyContent: "center",
    backgroundColor: colors.lightGrey,
  },
  progress: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.primary,
    borderRadius: KNOB_WIDTH / 2,
  },
  knob: {
    width: KNOB_WIDTH,
    height: KNOB_WIDTH,
    borderRadius: KNOB_WIDTH / 2,
    borderWidth: 3,
    borderColor: colors.purple2,
    backgroundColor: colors.white,
  },
  wrapper: {
    width: KNOB_WIDTH - 10,
    height: KNOB_WIDTH - 10,
  },
  image: {
    width: KNOB_WIDTH - 12,
    height: KNOB_WIDTH - 12,
    position: "absolute",
    top: 3,
    left: 3,
  },
});

export default CombinationButton;

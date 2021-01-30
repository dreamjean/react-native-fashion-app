import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

// import { snapPoint } from 'react-native-redash';
import { calender, colors } from '../../config';
// import Image from '../styles/Image';
// import Text from '../styles/Text';

const { KNOB_SIZE, KNOB_SLIDE_WIDTH } = calender;

const CombinationButton = () => {
  const translateX = useSharedValue(0);
  const isSliding = useSharedValue(false);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      isSliding.value = true;
      translateX.value = ctx.x + translationX;
    },
    onEnd: () => {
      isSliding.value = false;
    },
  });

  const knobStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: translateX.value + KNOB_SIZE,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.progress, progressStyle]}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.knob, knobStyle]} />
        </PanGestureHandler>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: KNOB_SLIDE_WIDTH,
    height: KNOB_SIZE,
    borderRadius: KNOB_SIZE / 2,
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
  },
  progress: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.primary,
    borderRadius: KNOB_SIZE / 2,
  },
  knob: {
    width: KNOB_SIZE,
    height: KNOB_SIZE,
    borderRadius: KNOB_SIZE / 2,
    backgroundColor: colors.purple,
  },
});

export default CombinationButton;

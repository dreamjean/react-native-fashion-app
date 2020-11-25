import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Animated, { interpolateNode } from 'react-native-reanimated';

import { theme } from '../../../config';

const { colors, getFont, size, space } = theme;

const LeftAction = ({ progress, dragX, onPress }) => {
  const transX = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [dragX, 0],
  });
  const textTransX = interpolateNode(dragX, {
    inputRange: [-101, -100, -50, 0],
    outputRange: [-20, 0, 0.5, 1],
  });

  return (
    <RectButton onPress={onPress}>
      <Animated.View
        style={[
          {
            flex: 1,
            width: 150,
            backgroundColor: colors.lightViotlet,
            justifyContent: 'center',
            marginRight: -space.xl,
            paddingLeft: space.s2,
          },
          {
            transform: [{ translateX: transX }],
          },
        ]}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={[colors.white, colors.lightGrey2, 'transparent']}
          start={{ x: 0.8, y: 1 }}
          end={{ x: 0.1, y: 1 }}
          locations={[0.1, 0.5, 0.8]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
          }}
        />
        <Animated.Text
          style={[
            {
              color: colors.red,
              fontSize: size.l,
              fontFamily: getFont(1),
              backgroundColor: 'transparent',
              padding: 10,
            },
            {
              transform: [{ translateX: textTransX }],
            },
          ]}
        >
          Remove
        </Animated.Text>
      </Animated.View>
    </RectButton>
  );
};

export default LeftAction;

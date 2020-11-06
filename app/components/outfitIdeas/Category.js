import React, { useState } from 'react';
import { Pressable } from 'react-native';
import Animated, { Extrapolate, interpolateNode } from 'react-native-reanimated';
import styled from 'styled-components';

import { calendar } from '../../config';
import Text from '../styles/Text';

const { CTG_RADIUS } = calendar;

const Category = ({ backgroundColor, title }) => {
  const [selected, setSelected] = useState(false);

  const scale = interpolateNode(selected, {
    inputRange: [0, 1, 1],
    outputRange: [1, 0.8, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Pressable
      onPress={() => setSelected((prev) => !prev)}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Container>
        <Wrapper {...{ selected, backgroundColor }}>
          <Animated.View
            style={{
              backgroundColor,
              width: CTG_RADIUS * 2,
              height: CTG_RADIUS * 2,
              borderRadius: CTG_RADIUS,
              transform: [{ scale }],
            }}
          />
        </Wrapper>
        <Text caption>{title}</Text>
      </Container>
    </Pressable>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;

  ${({ theme: { space } }) => ({
    marginTop: space.m1,
    marginLeft: space.m1,
  })}
`;

const Wrapper = styled.View`
  width: ${CTG_RADIUS * 2}px;
  height: ${CTG_RADIUS * 2}px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-radius: ${CTG_RADIUS}px;

  ${({ selected, backgroundColor, theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    borderColor: selected ? backgroundColor : colors.white,
    marginBottom: space.s1,
    marginHorizontal: space.s2,
  })}
`;

export default Category;

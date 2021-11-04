import { useState } from "react";
import { Pressable } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import styled from "styled-components";

import { constants } from "../../../config";
import { Text } from "../../../styles";

const { CTG_RADIUS } = constants;

const Category = ({ backgroundColor, title }) => {
  const [selected, setSelected] = useState(false);

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      selected,
      [0, 1, 1],
      [1, 0.8, 1],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }],
    };
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
            style={[
              {
                backgroundColor,
                width: CTG_RADIUS * 2,
                height: CTG_RADIUS * 2,
                borderRadius: CTG_RADIUS,
              },
              style,
            ]}
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
  border-width: 1px;
  border-radius: ${CTG_RADIUS}px;

  ${({ selected, backgroundColor, theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    borderColor: selected ? backgroundColor : colors.white,
    marginBottom: space.s1,
    marginHorizontal: space.s2,
  })}
`;

export default Category;

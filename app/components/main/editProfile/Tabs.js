import { Children } from "react";
import { Pressable } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components";

import { constants, theme } from "../../../config";

const { width, TAB_WIDTH } = constants;
const { colors, getFont, size, space } = theme;

const Tabs = ({ tabs, children }) => {
  const activeIndex = useSharedValue(0);

  const indicatorPosition = useDerivedValue(() => {
    return withTiming(activeIndex.value * TAB_WIDTH + TAB_WIDTH / 2);
  });

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      borderRadius: interpolate(
        activeIndex.value,
        [0, 0.5, 1],
        [5, 2.5, 0],
        Extrapolate.CLAMP
      ),
      transform: [{ translateX: indicatorPosition.value }],
    };
  });

  const childPosition = useDerivedValue(() => {
    return withTiming(-activeIndex.value * width);
  });

  const stylec = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: childPosition.value }],
    };
  });

  return (
    <>
      <Wrapper>
        {tabs.map((tab, index) => {
          const position = TAB_WIDTH * index + TAB_WIDTH / 2;
          const stylet = useAnimatedStyle(() => {
            const visibility = interpolate(
              indicatorPosition.value,
              [
                position - width / 4,
                position - width / 8,
                position + width / 8,
                position + width / 4,
              ],
              [0.5, 1, 1, 0.5],
              Extrapolate.CLAMP
            );
            return {
              opacity: visibility,
            };
          });

          return (
            <Box key={tab.id}>
              <Pressable
                onPress={() => {
                  activeIndex.value = index;
                }}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? colors.lightGreen : colors.white,
                    opacity: pressed ? 0.35 : 1,
                    padding: space.s2,
                  },
                ]}
              >
                <Animated.Text
                  style={[
                    {
                      fontFamily: getFont(1),
                      fontSize: size.xl,
                      color: colors.text,
                    },
                    stylet,
                  ]}
                >
                  {tab.label}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
        <Animated.View
          style={[
            {
              position: "absolute",
              left: -5,
              bottom: -4,
              backgroundColor: colors.primary,
              width: 10,
              height: 10,
            },
            indicatorStyle,
          ]}
        />
      </Wrapper>
      <Animated.View
        style={[
          {
            flex: 1,
            width: width * tabs.length,
            flexDirection: "row",
            marginTop: space.m2,
          },
          stylec,
        ]}
      >
        {Children.map(children, (child, index) => (
          <ChildWrapper key={index}>{child}</ChildWrapper>
        ))}
      </Animated.View>
    </>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  align-self: center;

  ${({ theme: { space } }) => ({
    marginHorizontal: space.l1,
    marginTop: space.xl * 2 + space.m1,
    paddingVertical: space.m1,
  })}
`;

const Box = styled.View`
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const ChildWrapper = styled.View`
  width: ${width}px;
`;

export default Tabs;

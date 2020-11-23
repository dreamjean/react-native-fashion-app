import React, { Children } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styled from 'styled-components';

import { calendar, colors } from '../../../config';
import Button from '../../Button';

const { width, TAB_WIDTH } = calendar;

const Tabs = ({ tabs, children }) => {
  const activeIndex = useSharedValue(0);
  const aref = useAnimatedRef();

  const indicatorPosition = useDerivedValue(() => {
    return withTiming(activeIndex.value * TAB_WIDTH + TAB_WIDTH / 2);
  });

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      borderRadius: interpolate(activeIndex.value, [0, 0.5, 1], [5, 2.5, 0], Extrapolate.CLAMP),
      transform: [{ translateX: indicatorPosition.value }],
    };
  });

  const childPosition = useDerivedValue(() => {
    return withTiming(activeIndex.value * width);
  });

  const stylec = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -childPosition.value }],
    };
  });

  return (
    <>
      <Wrapper>
        {tabs.map((tab, index) => {
          const isActive = activeIndex.value === index;
          const textOpacity = interpolate(isActive, [0, 1, 1], [0.4, 1, 0.4], Extrapolate.CLAMP);

          return (
            <Box key={tab.id}>
              <Button
                bgColor="transparent"
                label={tab.label}
                textStyle={[
                  {
                    fontSize: 18,
                    color: colors.text,
                    opacity: textOpacity,
                  },
                ]}
                width={TAB_WIDTH}
                onPress={() => (activeIndex.value = index)}
              />
            </Box>
          );
        })}
        <Animated.View
          ref={aref}
          style={[
            {
              position: 'absolute',
              left: -5,
              bottom: 4,
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
          { flex: 1, width: width * tabs.length, flexDirection: 'row', marginTop: 12 },
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

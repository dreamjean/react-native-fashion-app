import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import styled from 'styled-components';

import { calendar, colors } from '../../../config';
import { lerp } from '../../../utility/lerp';
import Text from '../../styles/Text';
import Underlay from './Underlay';

const { GRAPH_WIDTH, GRAPH_HEIGHT } = calendar;

const Graph = ({ data, scaleY }) => {
  const step = GRAPH_WIDTH / data.length;
  const columnWith = step * 0.32;
  const peakHeight = columnWith * 1.45;
  const dates = data.map((p) => p.date);

  const stylez = useAnimatedStyle(() => {
    const currentHeight = GRAPH_HEIGHT * scaleY.value;
    const translateY = (GRAPH_HEIGHT - currentHeight) / 2;

    return {
      transform: [{ translateY }, { scaleY: scaleY.value }],
    };
  });

  return (
    <Container>
      <Underlay {...{ dates, step }} />
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 0,
            right: 0,
            height: GRAPH_HEIGHT,
            width: GRAPH_WIDTH,
            backgroundColor: colors.lightGrey2,
          },
          stylez,
        ]}
      >
        {data.map((point, i) => {
          const totalHeight = lerp(0, GRAPH_HEIGHT, point.value / 500);

          if (point.value === 0) {
            return null;
          }

          return (
            <ColumnWrapper
              key={i}
              style={{
                left: i * step,
                width: step,
                height: totalHeight,
              }}
            >
              <Text
                style={{
                  opacity: 0.5,
                  fontSize: 9,
                  position: 'absolute',
                  alignSelf: 'center',
                  bottom: totalHeight + 4,
                }}
              >
                {point.value}
              </Text>
              <Column style={{ backgroundColor: point.color, width: columnWith }} />
              <Peak
                style={{
                  backgroundColor: point.color,
                  width: columnWith,
                  height: peakHeight,
                }}
              />
            </ColumnWrapper>
          );
        })}
      </Animated.View>
    </Container>
  );
};

const Container = styled.View`
  ${({ theme: { space } }) => ({
    marginTop: space.l2,
    marginRight: space.m2,
    height: GRAPH_HEIGHT + space.xl,
  })}
`;

const ColumnWrapper = styled.View`
  position: absolute;
  bottom: 0;
`;

const Column = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  align-self: center;

  ${({ theme: { radii } }) => ({
    borderTopLeftRadius: radii.m2,
    borderTopRightRadius: radii.m2,
    opacity: 0.15,
  })}
`;

const Peak = styled.View`
  position: absolute;
  top: 0;
  align-self: center;

  ${({ theme: { radii } }) => ({
    borderRadius: radii.m2,
  })}
`;

export default Graph;

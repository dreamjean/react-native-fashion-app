import React from 'react';
import styled from 'styled-components';

import { calendar } from '../../../config';
import { lerp } from '../../../utility/lerp';
import Underlay from './Underlay';

const { GRAPH_WIDTH, GRAPH_HEIGHT } = calendar;

const Graph = ({ data }) => {
  const step = GRAPH_WIDTH / data.length;
  const dates = data.map((p) => p.date);

  return (
    <Container>
      <Underlay {...{ dates, step }} />
      <Box style={{ position: 'absolute', top: 0, right: 0 }}>
        {data.map((point, i) => {
          if (point.value === 0) {
            return null;
          }

          return (
            <ColumnWrapper
              key={point.date}
              style={{
                left: i * step,
                width: step,
                height: lerp(0, GRAPH_HEIGHT, point.value / 500),
              }}
            >
              <Column backgroundColor={point.color} />
              <Peak backgroundColor={point.color} />
            </ColumnWrapper>
          );
        })}
      </Box>
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

const Box = styled.View`
  height: ${GRAPH_HEIGHT}px;
  width: ${GRAPH_WIDTH}px;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.darkGrey,
    marginLeft: space.xl,
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
  width: 18px;
  align-self: center;

  ${({ backgroundColor, theme: { radii } }) => ({
    backgroundColor,
    borderTopLeftRadius: radii.m2,
    borderTopRightRadius: radii.m2,
    opacity: 0.15,
  })}
`;

const Peak = styled.View`
  position: absolute;
  top: 0;
  width: 20px;
  height: 32px;
  align-self: center;

  ${({ backgroundColor, theme: { radii } }) => ({
    backgroundColor,
    borderRadius: radii.m2,
  })}
`;

export default Graph;
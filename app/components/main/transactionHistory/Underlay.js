import React from 'react';
import styled from 'styled-components';

import { calendar } from '../../../config';
import { lerp } from '../../../utility/lerp';
import Text from '../../styles/Text';

const Underlay = ({ dates, minY, maxY, step }) => {
  // const minX = Math.min(...dates);
  // const maxX = Math.max(...dates);

  return (
    <Box>
      {[1, 0.75, 0.5, 0.25].map((t) => (
        <RowBar key={t}>
          <Text
            caption
            style={{
              opacity: 0.8,
              textAlign: 'right',
              position: 'absolute',
              top: -12,
              left: 0,
              marginRight: 8,
            }}
          >
            {Math.round(lerp(minY, maxY, t))}
          </Text>
          <Seperator />
        </RowBar>
      ))}

      <Xaxis>
        {dates.map((date, index) => (
          <MonElement key={index} style={{ width: step }}>
            <Text caption center style={{ opacity: 0.8 }}>
              {date}
            </Text>
          </MonElement>
        ))}
      </Xaxis>
    </Box>
  );
};

const Box = styled.View`
  flex: 1;
`;

const RowBar = styled.View`
  height: ${calendar.GRAPH_HEIGHT / 4}px;
  flex-direction: row;

  ${({ theme: { space } }) => ({
    marginLeft: space.m2,
  })};
`;

const Seperator = styled.View`
  height: 1px;
  width: 90%;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.text,
    marginLeft: space.l2,
    opacity: 0.1,
  })};
`;

const Xaxis = styled.View`
  flex-direction: row;

  ${({ theme: { space } }) => ({
    marginLeft: space.xl,
  })};
`;

const MonElement = styled.View``;

export default Underlay;

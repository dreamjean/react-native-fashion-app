import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

import { calendar } from '../../../config';
import Text from '../../styles/Text';

const Underlay = ({ dates, step }) => {
  return (
    <Box>
      {[500, 400, 300, 200, 100, 0].map((t) => (
        <RowBar marginTop={t === 500 ? 0 : calendar.GRAPH_HEIGHT / 5} key={t}>
          <Text
            caption
            style={{
              opacity: 0.8,
              textAlign: 'right',
              position: 'absolute',
              bottom: -12,
              left: 0,
              marginRight: 8,
            }}
          >
            {t}
          </Text>
          <Seperator />
        </RowBar>
      ))}

      <Xaxis>
        {dates.map((date, index) => (
          <Dates key={index} style={{ width: step }}>
            <Text caption center style={{ opacity: 0.8 }}>
              {dayjs(date).format('MMM')}
            </Text>
          </Dates>
        ))}
      </Xaxis>
    </Box>
  );
};

const Box = styled.View`
  flex: 1;
`;

const RowBar = styled.View`
  flex-direction: row;
  justify-content: flex-end;

  ${({ marginTop, theme: { space } }) => ({
    marginLeft: space.m2,
    marginTop,
  })};
`;

const Seperator = styled.View`
  height: 1px;
  width: 90%;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.text,
    marginLeft: space.l2,
    opacity: 0.08,
  })};
`;

const Xaxis = styled.View`
  flex-direction: row;

  ${({ theme: { space } }) => ({
    marginLeft: space.xl,
  })};
`;

const Dates = styled.View``;

export default Underlay;

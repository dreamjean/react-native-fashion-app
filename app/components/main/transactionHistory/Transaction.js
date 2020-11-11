import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../config';
import Button from '../../Button';
import Text from '../../styles/Text';

const Transaction = ({ color, date, id, value }) => {
  return (
    <Wrapper>
      <Box>
        <NumBox>
          <Dot color={color} />
          <Text title1>#{id}</Text>
        </NumBox>
        <TextBox>
          <Text button style={{ opacity: 0.8 }}>
            ${value}
            {' - '}
          </Text>
          <Text button style={{ opacity: 0.8 }}>
            {dayjs(date).format('DD MMMM,YYYY')}
          </Text>
        </TextBox>
      </Box>
      <Button
        label="See more"
        width={90}
        bgColor="transparent"
        textStyle={{ textTransform: 'none', color: colors.text }}
        onPress={() => true}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginHorizontal: space.l2,
    paddingVertical: space.s2,
  })}
`;

const Box = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const NumBox = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginBottom: space.s1,
  })}
`;

const Dot = styled.View`
  width: 8px;
  height: 8px;

  ${({ color, theme: { radii, space } }) => ({
    backgroundColor: color,
    borderRadius: radii.s1,
    marginRight: space.m1,
  })}
`;

const TextBox = styled.View`
  flex-direction: row;
`;

export default Transaction;

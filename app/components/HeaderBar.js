import React from 'react';
import styled from 'styled-components';

import { colors } from '../config';
import IconButton from './IconButton';
import Text from './styles/Text';

const HeaderBar = ({ title, left, right, dark = false, white = false }) => {
  const color = dark ? colors.white : colors.text;
  const backgroundColor = dark ? colors.primary : colors.grey;

  return (
    <Wrapper>
      <IconButton
        iconName={left.icon}
        backgroundColor={backgroundColor}
        color={color}
        size={dark ? 32 : 36}
        iconRatio={0.6}
        onPress={left.onPress}
      />
      <Text caption upper white={white}>
        {title}
      </Text>
      <IconButton
        iconName={right.icon}
        backgroundColor={backgroundColor}
        color={color}
        size={dark ? 32 : 36}
        iconRatio={0.6}
        onPress={right.onPress}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginTop: space.l2,
    paddingHorizontal: space.m2,
  })}
`;

export default HeaderBar;

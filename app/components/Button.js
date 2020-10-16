import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components';

import Text from './styles/Text';

const Button = ({
  borderColor,
  bgColor,
  label,
  onPress,
  primary,
  space = true,
  textStyle,
  width = 245,
}) => {
  return (
    <Container {...{ borderColor, bgColor, space, width, primary }} onPress={onPress}>
      <Text button style={textStyle} primary={primary}>
        {label}
      </Text>
    </Container>
  );
};

const borderStyle = css`
  background-color: transparent;
  border-width: 3px;

  ${({ borderColor }) => ({
    borderColor,
  })}
`;

const spaceStyle = css`
  ${({ theme: { space } }) => ({
    marginTop: space.m,
  })}
`;

const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;

  ${({ bgColor, primary, width, theme: { colors, space, radii } }) => ({
    backgroundColor: bgColor ? bgColor : primary ? colors.primary : colors.grey,
    borderRadius: radii.l,
    paddingVertical: space.xs,
    width: width,
  })};

  ${({ border }) => border && borderStyle}
  ${({ space }) => space && spaceStyle}
`;

export default Button;

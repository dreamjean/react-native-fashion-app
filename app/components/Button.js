import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components';

import Text from './styles/Text';

const Button = ({
  borderColor,
  bgColor,
  label,
  onPress,
  opacity,
  primary,
  space = false,
  textStyle,
  width = 245,
}) => {
  return (
    <Container {...{ borderColor, bgColor, space, width, primary, opacity }} onPress={onPress}>
      <Text button style={textStyle} primary={primary}>
        {label}
      </Text>
    </Container>
  );
};

const borderStyle = css`
  background-color: transparent;
  border-width: 2px;

  ${({ borderColor }) => ({
    borderColor,
  })}
`;

const spaceStyle = css`
  ${({ theme: { space } }) => ({
    marginTop: space.m2,
  })}
`;

const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;

  ${({ opacity, bgColor, primary, width, theme: { colors, space, radii } }) => ({
    backgroundColor: bgColor ? bgColor : primary ? colors.primary : colors.grey,
    borderRadius: radii.m1,
    paddingVertical: space.m1,
    width: width,
    opacity,
  })};

  ${({ borderColor }) => borderColor && borderStyle}
  ${({ space }) => space && spaceStyle}
`;

export default Button;

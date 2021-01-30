import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components';

import Text from './styles/Text';

const Button = ({
  borderColor,
  bgColor,
  label,
  onPress,
  paddingHorizontal = 18,
  primary,
  space = false,
  textStyle,
}) => {
  return (
    <Touchable {...{ onPress, space }}>
      <Container {...{ borderColor, bgColor, paddingHorizontal, primary }}>
        <Text button style={textStyle} primary={primary}>
          {label}
        </Text>
      </Container>
    </Touchable>
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

const Container = styled.View`
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${({ bgColor, primary, paddingHorizontal, theme: { colors, space, radii } }) => ({
    backgroundColor: bgColor ? bgColor : primary ? colors.primary : colors.grey,
    borderRadius: radii.m1,
    paddingVertical: space.m1,
    paddingHorizontal,
  })};

  ${({ borderColor }) => borderColor && borderStyle}
`;

const Touchable = styled(RectButton)`
  ${({ theme: { radii } }) => ({
    borderRadius: radii.m1,
  })};

  ${({ space }) => space && spaceStyle}
`;

export default Button;

import styled, { css } from "styled-components";

import { Text } from "../styles";

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
    <Touchable activeOpacity={0.5} {...{ onPress, space }}>
      <Container {...{ borderColor, bgColor, paddingHorizontal, primary }}>
        <Text button style={textStyle} primary={primary}>
          {label}
        </Text>
      </Container>
    </Touchable>
  );
};

const spaceStyle = css`
  ${({ theme: { space } }) => ({
    marginTop: space.m2,
  })}
`;

const Touchable = styled.TouchableOpacity`
  ${({ theme: { radii } }) => ({
    borderRadius: radii.m1,
  })};

  ${({ space }) => space && spaceStyle}
`;

const borderStyle = css`
  background-color: transparent;
  border-width: 2px;

  ${({ borderColor }) => ({
    borderColor,
  })}
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${({
    bgColor,
    primary,
    paddingHorizontal,
    theme: { colors, space, radii },
  }) => ({
    backgroundColor: bgColor ? bgColor : primary ? colors.primary : colors.grey,
    borderRadius: radii.m1,
    paddingVertical: space.m1,
    paddingHorizontal,
  })};

  ${({ borderColor }) => borderColor && borderStyle}
`;

export default Button;

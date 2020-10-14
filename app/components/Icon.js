import React from 'react';
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icon = ({
  backgroundColor,
  borderColor,
  color = 'white',
  round = true,
  iconRatio = 0.7,
  iconName,
  size,
}) => {
  return (
    <Box {...{ backgroundColor, borderColor, round, size }}>
      <MaterialCommunityIcons name={iconName} size={iconRatio * size} color={color} />
    </Box>
  );
};

const Box = styled.View`
  justify-content: center;
  align-items: center;

  ${({ round, size, backgroundColor, borderColor, theme: { space } }) => ({
    backgroundColor,
    borderColor,
    borderWidth: borderColor ? 1 : 0,
    borderRadius: round ? size / 2 : space.b,
    height: size,
    width: size,
  })}
`;

export default Icon;

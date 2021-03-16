import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';

const Icon = ({
  backgroundColor,
  borderColor,
  color = 'white',
  round = true,
  iconRatio = 0.7,
  iconName,
  IconComponent = MaterialCommunityIcons,
  size,
}) => {
  return (
    <Box {...{ backgroundColor, borderColor, round, size }}>
      <IconComponent name={iconName} size={iconRatio * size} color={color} />
    </Box>
  );
};

const Box = styled.View`
  align-items: center;
  justify-content: center;

  ${({ round, size, backgroundColor, borderColor, theme: { radii } }) => ({
    backgroundColor,
    borderColor,
    borderWidth: borderColor ? 1 : 0,
    borderRadius: round ? size / 2 : radii.s1,
    height: size,
    width: size,
  })}
`;

export default Icon;

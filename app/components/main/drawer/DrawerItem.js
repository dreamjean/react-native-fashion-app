import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components';

import { colors } from '../../../config';
import Icon from '../../Icon';
import Text from '../../styles/Text';

const DrawerItem = ({ label, icon, color, focused, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        backgroundColor: pressed ? colors.lightCyan : 'transparent',
      })}
    >
      <Box {...{ focused }}>
        <Icon iconName={icon} iconRatio={0.6} size={36} backgroundColor={color} />
        <Title caption {...{ focused }}>
          {label}
        </Title>
      </Box>
    </Pressable>
  );
};

const Box = styled.View`
  flex-direction: row;
  align-items: center;
  ${({ focused, theme: { space, colors, radii } }) => ({
    backgroundColor: focused ? colors.violet2 : colors.white,
    borderRadius: radii.s2,
    padding: space.m1,
    paddingTop: space.m2,
  })}
`;

const Title = styled(Text)`
  ${({ focused, theme: { colors, size, space } }) => ({
    color: focused ? colors.primary : colors.sencodary,
    fontSize: focused ? size.l2 : size.l,
    fontWeight: focused ? 'bold' : '500',
    marginLeft: space.m2,
  })}
`;

export default DrawerItem;

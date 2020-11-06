import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

import Icon from '../Icon';
import Text from '../styles/Text';

const DrawerItem = ({ label, icon, color, focused, onPress }) => {
  return (
    <RectButton onPress={onPress}>
      <Box {...{ focused }}>
        <Icon iconName={icon} iconRatio={0.6} size={36} backgroundColor={color} />
        <Title caption {...{ focused }}>
          {label}
        </Title>
      </Box>
    </RectButton>
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
    fontSize: size.l,
    fontWeight: focused ? 'bold' : '500',
    marginLeft: space.m2,
  })}
`;

export default DrawerItem;

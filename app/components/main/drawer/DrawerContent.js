import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { Alert } from 'react-native';
import Animated, { interpolateNode } from 'react-native-reanimated';
import styled from 'styled-components';

import { colors } from '../../../config';
import drawerMenu from '../../../data/drawerMenu';
import View from '../../styles/View';
import Avatar from '../Avatar';
import HeaderBar from '../HeaderBar';
import ImgFooter from '../ImgFooter';
import DrawerItem from './DrawerItem';

const DrawerContent = ({ progress, ...rest }) => {
  const routeKey = rest.state.routes[0].key;

  const scale = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  return (
    <View container>
      <View heading>
        <HeaderBar
          dark
          white
          title="my profile"
          left={{ icon: 'chevron-left', onPress: () => rest.navigation.closeDrawer() }}
          right={{ icon: 'lock-pattern', onPress: () => true }}
        />
      </View>
      <View bdBox />

      <Medium>
        <Avatar />
        <Menu {...rest}>
          <Animated.View style={{ transform: [{ scale }] }}>
            {drawerMenu.map((item, i) => (
              <DrawerItem
                key={i}
                label={item.label}
                color={item.color}
                focused={item.title === rest.descriptors[routeKey].options.headerTitle}
                icon={item.icon}
                onPress={() => rest.navigation.navigate(item.screen)}
              />
            ))}
            <Logout>
              <DrawerItem
                label="LogOut"
                color={colors.secondary}
                icon="logout"
                onPress={() => Alert}
              />
            </Logout>
          </Animated.View>
        </Menu>
      </Medium>
      <ImgFooter />
    </View>
  );
};

const Medium = styled.View`
  flex: 1;
  margin-top: -75px;
  margin-bottom: -75px;

  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.white,
    borderTopLeftRadius: radii.xl,
    borderBottomRightRadius: radii.xl,
    padding: space.l1,
  })};
`;

const Menu = styled(DrawerContentScrollView)`
  margin-top: 50px;
  flex: 1;
`;

const Logout = styled.View`
  border-top-width: 1px;

  ${({ theme: { colors, space } }) => ({
    borderColor: colors.violet,
    marginTop: space.l1,
  })}
`;

export default DrawerContent;

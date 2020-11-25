import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { Alert } from 'react-native';
import Animated, { Extrapolate, interpolateNode } from 'react-native-reanimated';
import styled from 'styled-components';

import { colors } from '../../config';
import drawerMenu from '../../data/drawerMenu';
import { Avatar, HeaderBar } from '../main';
import View from '../styles/View';
import DrawerItem from './DrawerItem';
import ImgFooter from './ImgFooter';

const DrawerContent = ({ progress, ...rest }) => {
  const routeKey = rest.state.routes[0].key;

  const scale = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0.5, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View container>
      <View heading>
        <HeaderBar
          dark
          white
          title="my profile"
          left={{ icon: 'chevron-left', onPress: () => rest.navigation.closeDrawer() }}
          right={{ icon: 'lock-pattern', onPress: () => rest.navigation.navigate('Cart') }}
        />
      </View>
      <View bdBox />

      <Medium>
        <Avatar />
        <Menu>
          <DrawerContentScrollView {...rest} showsVerticalScrollIndicator={false}>
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
            </Animated.View>
          </DrawerContentScrollView>
        </Menu>
        <Seperator />
        <Logout>
          <DrawerItem label="LogOut" color={colors.secondary} icon="logout" onPress={() => Alert} />
        </Logout>
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
    paddingBottom: space.n,
  })};
`;

const Menu = styled.View`
  margin-top: 45px;
  flex: 1;
`;

const Seperator = styled.View`
  height: 2px;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.violet,
    marginBottom: space.s1,
    marginHorizontal: space.s2,
  })}
`;

const Logout = styled.View`
  border-top-width: 1px;
  overflow: hidden;

  ${({ theme: { colors, space, radii } }) => ({
    borderColor: colors.violet,
    borderRadius: radii.m2,
    marginBottom: space.m1,
  })}
`;

export default DrawerContent;

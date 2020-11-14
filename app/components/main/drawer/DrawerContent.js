import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../config';
import drawerMenu from '../../../data/drawerMenu';
import View from '../../styles/View';
import Avatar from '../Avatar';
import HeaderBar from '../HeaderBar';
import ImgFooter from '../ImgFooter';
import DrawerItem from './DrawerItem';

const logoutIndex = 5;

const DrawerContent = (props) => {
  return (
    <View container>
      <View heading>
        <HeaderBar
          dark
          white
          title="my profile"
          left={{ icon: 'chevron-left', onPress: () => props.navigation.closeDrawer() }}
          right={{ icon: 'lock-pattern', onPress: () => true }}
        />
      </View>
      <View bdBox />

      <Medium>
        <Avatar />
        <Menu {...props}>
          {drawerMenu.map((item, i) => (
            <DrawerItem
              key={i}
              label={item.label}
              color={item.color}
              focused={i === props.state.index}
              icon={item.icon}
              onPress={() => props.navigation.navigate(item.screen)}
            />
          ))}
        </Menu>
        <Logout>
          <DrawerItem
            label="LogOut"
            color={colors.secondary}
            focused={logoutIndex === props.state.index}
            icon="logout"
            onPress={() => true}
          />
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
  })};
`;

const Menu = styled(DrawerContentScrollView)`
  margin-top: 50px;
  flex: 1;
`;

const Logout = styled.View`
  border-top-width: 1px;

  ${({ theme: { colors } }) => ({
    borderColor: colors.violet,
  })}
`;

export default DrawerContent;

import { DrawerContentScrollView } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components';

import { calendar, colors, images } from '../../config';
import drawerMenu from '../../data/drawerMenu';
import HeaderBar from '../HeaderBar';
import BorderBox from '../styles/BorderBox';
import Image from '../styles/Image';
import Text from '../styles/Text';
import DrawerItem from './DrawerItem';

const { FOOTER_HEIGHT } = calendar;
const indexNum = 5;

const DrawerContent = (props) => {
  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <HeaderBar
          dark
          white
          title="my profile"
          left={{ icon: 'chevron-left', onPress: () => props.navigation.closeDrawer() }}
          right={{ icon: 'lock-pattern', onPress: () => true }}
        />
      </Header>
      <BorderBox />

      <Medium>
        <AvatarContainer>
          <Avatar>
            <Image avatar source={images[0]} />
          </Avatar>
          <Text title2>Rokia</Text>
          <Text>rokia@demo.com</Text>
        </AvatarContainer>
        <Menu {...props}>
          {drawerMenu.map((item, i) => (
            <DrawerItem
              key={i}
              label={item.label}
              color={item.color}
              focused={i === props.state.index}
              icon={item.icon}
              onPress={() => true}
            />
          ))}
        </Menu>
        <Logout>
          <DrawerItem
            label="LogOut"
            color={colors.secondary}
            focused={indexNum === props.state.index}
            icon="logout"
            onPress={() => props.navigation.navigate('OutfitIdea')}
          />
        </Logout>
      </Medium>
      <BorderBox>
        <Image mdBorder up source={images[6]} />
      </BorderBox>
      <Footer>
        <Image ratio source={images[6]} />
      </Footer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const Header = styled.View`
  height: 120px;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.secondary,
    borderBottomRightRadius: radii.xl,
  })}
`;

const Avatar = styled.View`
  ${({ theme: { space } }) => ({
    marginBottom: space.s,
  })}
`;

const AvatarContainer = styled.View`
  align-self: center;
  align-items: center;
  position: absolute;
  top: -35px;
`;

const Medium = styled.View`
  flex: 1;
  margin-top: -75px;
  margin-bottom: -75px;

  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.white,
    borderTopLeftRadius: radii.xl,
    borderBottomRightRadius: radii.xl,
    padding: space.m2,
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

const Footer = styled.View`
  height: ${FOOTER_HEIGHT}PX;
  overflow: hidden;

  ${({ theme: { radii } }) => ({
    borderTopLeftRadius: radii.xl,
  })}
`;

export default DrawerContent;

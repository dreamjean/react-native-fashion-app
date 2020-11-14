import React from 'react';
import styled from 'styled-components';

import { Avatar, HeaderBar } from '../components/main';
import View from '../components/styles/View';

const EditProfileScreen = ({ navigation }) => {
  return (
    <View container>
      <View heading>
        <HeaderBar
          dark
          white
          title="Edit Profile"
          bgColor="transparent"
          left={{ icon: 'arrow-left', onPress: () => navigation.openDrawer() }}
        />
      </View>
      <View bdBox />
      <Medium>
        <Avatar />
      </Medium>
    </View>
  );
};

const Medium = styled.View`
  flex: 1;
  margin-top: -75px;

  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.white,
    borderTopLeftRadius: radii.xl,
    borderBottomRightRadius: radii.xl,
    padding: space.l1,
  })};
`;

export default EditProfileScreen;

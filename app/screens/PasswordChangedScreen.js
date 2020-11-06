import { Entypo } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';

import { Button, Icon } from '../components';
import { Container, IconFooter } from '../components/authenticate';
import Text from '../components/styles/Text';
import { colors } from '../config';

const PasswordChangedScreen = ({ navigation }) => {
  return (
    <>
      <Container pattern={8} ltBorder rtBorder>
        <Icon
          IconComponent={Entypo}
          iconName="emoji-happy"
          backgroundColor={colors.danger2}
          color={colors.primary}
          iconRatio={1}
          size={80}
        />
        <TextBox>
          <Text title2 center>
            Password sent. Please check your email.
          </Text>
          <Text body center mtp>
            close this window and login again
          </Text>
        </TextBox>
        <Button primary label="Back to Login" onPress={() => navigation.navigate('Login')} />
      </Container>
      <IconFooter onPress={() => navigation.navigate('Welcome')} />
    </>
  );
};

const TextBox = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.s2,
    marginTop: space.l1,
    marginBottom: space.m2,
  })}
`;

export default PasswordChangedScreen;

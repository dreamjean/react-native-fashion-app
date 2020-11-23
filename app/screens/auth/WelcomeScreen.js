import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import styled from 'styled-components';

import { Button } from '../../components';
import Image from '../../components/styles/Image';
import Text from '../../components/styles/Text';
import { calendar, colors, images } from '../../config';

const { CELL_NUM, SIDEBAR_HEIGHT } = calendar;

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <BorderContainer>
        <Border
          start={{ x: 1, y: 0.6 }}
          locations={[0.1, 0.3, 0.6, 0.9]}
          colors={[colors.purple3, colors.blue, colors.yellow, colors.pink]}
        >
          <Image small resizeMode="contain" source={images[5]} />
        </Border>
      </BorderContainer>
      <Medium />
      <Caption>
        <TextBox>
          <Title title1>{"Let's get started"}</Title>
          <Text body center mtp>
            Login to your account below or signup for an amazing experience
          </Text>
        </TextBox>
        <Button
          primary
          space
          paddingHorizontal={80}
          label="LogIn"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          paddingHorizontal={70}
          space
          label="Register"
          onPress={() => navigation.navigate('Register')}
        />
        <Button
          bgColor="transparent"
          textStyle={{ color: colors.primary, textTransform: 'capitalize' }}
          label="Forgot password?"
          onPress={() => navigation.navigate('ForgotPassword')}
        />
      </Caption>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}; ;
`;

const BorderContainer = styled.View`
  overflow: hidden;

  ${({ theme: { radii } }) => ({
    borderBottomRightRadius: radii.xl,
  })}
`;

const Border = styled(LinearGradient)`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  height: ${SIDEBAR_HEIGHT}px;
`;

const Medium = styled.View`
  height: ${CELL_NUM}px;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.pink,
  })};
`;

const Caption = styled.View`
  flex: 1;
  align-items: center;
  margin-top: -${CELL_NUM}px;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.white,
    paddingBottom: space.m2,
    borderTopLeftRadius: radii.xl,
  })};
`;

const Title = styled(Text)`
  text-transform: capitalize;

  ${({ theme: { colors, space } }) => ({
    color: colors.primary,
    marginTop: space.xl,
  })};
`;

const TextBox = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.xl,
  })}
`;

export default WelcomeScreen;

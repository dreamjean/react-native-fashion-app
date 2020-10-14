import React from 'react';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';
import calendar from '../config/calendar';
import Text from '../components/styles/Text';
import Image from '../components/styles/Image';
import { Button } from '../components';

const { CELL_NUM, SIDEBAR_HEIGHT } = calendar;

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <BorderContainer>
        <Border
          start={{ x: 1, y: 0.6 }}
          locations={[0.1, 0.3, 0.6, 0.9]}
          colors={[colors.purple, colors.green2, colors.yellow, colors.orange]}
        >
          <Image medium resizeMode="contain" source={require('../assets/timg5.png')} />
        </Border>
      </BorderContainer>
      <Medium />
      <Caption>
        <TextBox>
          <Title title1>Let's get started</Title>
          <Text body center>
            Login to your account below or signup for an amazing experience
          </Text>
        </TextBox>
        <Button primary label="LogIn" onPress={() => navigation.navigate('Login')} />
        <Button label="Register" onPress={() => navigation.navigate('Register')} />
        <Button
          space={false}
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
    backgroundColor: colors.orange,
  })};
`;

const Caption = styled.View`
  flex: 1;
  align-items: center;
  margin-top: -${CELL_NUM}px;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.white,
    paddingBottom: space.m,
    borderTopLeftRadius: radii.xl,
  })};
`;

const Title = styled(Text)`
  text-transform: capitalize;

  ${({ theme: { colors, space } }) => ({
    color: colors.primary,
    marginTop: space.xxl,
  })};
`;

const TextBox = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.xxl,
  })}
`;

export default WelcomeScreen;

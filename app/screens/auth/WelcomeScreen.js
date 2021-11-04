import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

import { Button } from "../../components";
import { colors, constants, images } from "../../config";
import { Image, Text } from "../../styles";

const { CELL_NUM, SIDEBAR_HEIGHT } = constants;

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <TopContainer>
        <Background
          start={[0.8, 0.2]}
          end={[0.1, 0.9]}
          locations={[0.1, 0.3, 0.7, 0.9]}
          colors={[colors.purple3, colors.blue, colors.yellow, colors.pink]}
        >
          <Image small resizeMode="contain" source={images[5]} />
        </Background>
      </TopContainer>
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
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          paddingHorizontal={70}
          space
          label="Register"
          onPress={() => navigation.navigate("Register")}
        />
        <Button
          bgColor="transparent"
          textStyle={{ color: colors.primary, textTransform: "capitalize" }}
          label="Forgot password?"
          onPress={() => navigation.navigate("ForgotPassword")}
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

const TopContainer = styled.View`
  overflow: hidden;

  ${({ theme: { radii } }) => ({
    borderBottomRightRadius: radii.xl,
  })}
`;

const Background = styled(LinearGradient)`
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
    paddingBottom: space.m2,
  })}
`;

export default WelcomeScreen;

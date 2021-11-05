import { Entypo } from "@expo/vector-icons";
import styled from "styled-components";

import { Button, Container, Icon, IconFooter } from "../../components";
import { colors, images } from "../../config";
import { Text } from "../../styles";

const PasswordChangedScreen = ({ navigation }) => {
  return (
    <>
      <Container image={images.bg3} ltBorder rtBorder>
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
        <Button
          space
          primary
          paddingHorizontal={60}
          label="Back to Login"
          onPress={() => navigation.navigate("Login")}
        />
      </Container>
      <IconFooter onPress={() => navigation.navigate("Welcome")} />
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

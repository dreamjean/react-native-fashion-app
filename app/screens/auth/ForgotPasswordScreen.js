import { Keyboard, Linking } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import { Container, LinkFooter } from "../../components";
import { Form, FormField, SubmitButton } from "../../components/forms";
import { images } from "../../config";
import { Text } from "../../styles";

let validationSchema = Yup.object().shape({
  email: Yup.string().required().email("Invalid Email").label("Email"),
});

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <>
      <Container image={images.bg3} ltBorder rtBorder>
        <TextBox>
          <Text title2 mbt>
            Forgot password?
          </Text>
          <Text body center mtp>
            Enter the email address associated with your account
          </Text>
        </TextBox>
        <Form
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={() => {
            navigation.navigate("PasswordChanged");
            Keyboard.dismiss();
          }}
        >
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            icon="email"
            keyboardAppearance="default"
            keyboardType="email-address"
            name="email"
            numberOfLines={1}
            placeholder="Enter email"
            textContentType="emailAddress"
          />
          <ButtonWrapper>
            <SubmitButton label="Reset password" />
          </ButtonWrapper>
        </Form>
      </Container>
      <LinkFooter
        title="Don't work?"
        action="Try another way"
        onPress={() => Linking.openURL('"mailto:help@support.com"')}
      />
    </>
  );
};

const TextBox = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.s2,
    marginBottom: space.l2,
  })}
`;

const ButtonWrapper = styled.View`
  ${({ theme: { space } }) => ({
    marginTop: space.m2,
  })}
`;

export default ForgotPasswordScreen;

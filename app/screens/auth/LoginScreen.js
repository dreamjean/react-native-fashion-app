import { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import { Button, Container, LinkFooter } from "../../components";
import {
  Form,
  FormCheckbox,
  FormField,
  SubmitButton,
} from "../../components/forms";
import { colors } from "../../config";
import { Text } from "../../styles";

let validationSchema = Yup.object().shape({
  email: Yup.string().required().email("Invalid Email").label("Email"),
  password: Yup.string().required().min(5).max(50).label("Password"),
  remember: Yup.boolean(),
});

const LoginScreen = ({ navigation }) => {
  const [inputs] = useState([]);
  const focusNextField = (nextField) => inputs[nextField].focus();

  return (
    <>
      <Container pattern={6} imgLbr rtBorder>
        <TextBox>
          <Text title2>Welcome Back</Text>
          <Text body center mtp>
            Use your credentials below and login to your account
          </Text>
        </TextBox>
        <Form
          initialValues={{ email: "", password: "", remember: false }}
          validationSchema={validationSchema}
          onSubmit={() => navigation.navigate("Main", { name: "OutfitIdeas" })}
        >
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="email"
            keyboardAppearance="default"
            keyboardType="email-address"
            name="email"
            numberOfLines={1}
            onSubmitEditing={() => focusNextField("password")}
            placeholder="Enter email"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="emailAddress"
          />
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="lock"
            keyboardAppearance="default"
            keyboardType="default"
            maxLength={50}
            name="password"
            numberOfLines={1}
            onRef={(input) => (inputs["password"] = input)}
            placeholder="Enter password"
            returnKeyLabel="go"
            returnKeyType="go"
            secureTextEntry
            textContentType="password"
          />
          <Box>
            <FormCheckbox name="remember" title="remeber me" />
            <Button
              width={150}
              label="Forgot Password?"
              bgColor="transparent"
              textStyle={{ color: colors.primary, textTransform: "capitalize" }}
              onPress={() => navigation.navigate("ForgotPassword")}
            />
          </Box>
          <SubmitButton label="Log into your account" />
        </Form>
      </Container>
      <LinkFooter
        title="Don't have an account?"
        action="Sign Up here"
        onPress={() => navigation.navigate("Register")}
      />
    </>
  );
};

const TextBox = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.s2,
    marginBottom: space.m2,
  })}
`;

const Box = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default LoginScreen;

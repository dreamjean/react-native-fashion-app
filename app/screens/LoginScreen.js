import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import { Button } from '../components';
import { Container, LinkFooter } from '../components/authScreens';
import { Form, FormCheckbox, FormField, SubmitButton } from '../components/forms';
import Text from '../components/styles/Text';
import colors from '../config/colors';

let validationSchema = Yup.object().shape({
  email: Yup.string().required().email('Invalid Email').label('Email'),
  password: Yup.string().required().min(5).max(50).label('Password'),
  remember: Yup.boolean(),
});

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <Container>
        <TextBox>
          <Text title2>Welcome Back</Text>
          <Text body center>
            Use your credentials below and login to your account
          </Text>
        </TextBox>
        <Form
          initialValues={{ email: '', password: '', remember: false }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
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
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="emailAddress"
          />

          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            icon="lock"
            keyboardAppearance="default"
            keyboardType="default"
            maxLength={50}
            name="password"
            numberOfLines={1}
            placeholder="Enter password"
            returnKeyLabel="go"
            returnKeyType="go"
            secureTextEntry
            textContentType="password"
          />
          <Box>
            <FormCheckbox name="remember" title="remeber me" />
            <Button
              width={160}
              space={false}
              label="Forgot Password?"
              bgColor="transparent"
              textStyle={{ color: colors.primary, textTransform: 'capitalize' }}
              onPress={() => navigation.navigate('ForgotPassword')}
            />
          </Box>
          <SubmitButton label="Log into your account" />
        </Form>
      </Container>
      <LinkFooter
        title="Don't have an account?"
        action="Sign Up here"
        onPress={() => navigation.navigate('Register')}
      />
    </>
  );
};

const TextBox = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.s,
    marginBottom: space.m,
  })}
`;

const Box = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default LoginScreen;

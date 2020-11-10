import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import { Container, LinkFooter } from '../../components/auth';
import { Form, FormField, SubmitButton } from '../../components/forms';
import Text from '../../components/styles/Text';

let validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email('Invalid Email').label('Email'),
  password: Yup.string()
    .required()
    .min(5)
    .max(50)
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\d/, 'Password must have a number')
    .label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required()
    .label('Confirm password'),
});

const RegisterScreen = ({ navigation }) => {
  return (
    <>
      <Container pattern={7} imgRbr ltBorder>
        <TextBox>
          <Text title2>Create Account</Text>
          <Text body center mtp>
            Let us know what your name, email, and your password
          </Text>
        </TextBox>
        <Form
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="name"
            autoCorrect={false}
            icon="account-circle"
            keyboardAppearance="default"
            keyboardType="default"
            name="name"
            numberOfLines={1}
            placeholder="Name"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="name"
          />
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
            placeholder="Email"
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
            placeholder="Password"
            returnKeyLabel="next"
            returnKeyType="next"
            secureTextEntry
            textContentType="password"
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
            name="confirmPassword"
            numberOfLines={1}
            placeholder="Confirm Password"
            returnKeyLabel="go"
            returnKeyType="go"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton label="Log into your account" />
        </Form>
      </Container>
      <LinkFooter
        title="Already have an account?"
        action="Sign In here"
        onPress={() => navigation.navigate('Login')}
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

export default RegisterScreen;

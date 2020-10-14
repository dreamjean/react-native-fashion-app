import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import { Container, IconFooter } from '../components/authScreens';
import Text from '../components/styles/Text';
import { Form, FormField, SubmitButton } from '../components/forms';

let validationSchema = Yup.object().shape({
  email: Yup.string().required().email('Invalid Email').label('Email'),
});

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <TextBox>
            <Text title2>Forgot password?</Text>
            <Text body center>
              Enter the email address associated with your account
            </Text>
          </TextBox>
          <Form
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => navigation.navigate('PasswordChanged')}
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
              returnKeyLabel="go"
              returnKeyType="go"
              textContentType="emailAddress"
            />
            <SubmitButton label="Reset password" />
          </Form>
        </Wrapper>
      </Container>
      <IconFooter onPress={() => navigation.pop()} />
    </>
  );
};

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.s,
    marginBottom: space.m,
  })}
`;

export default ForgotPasswordScreen;

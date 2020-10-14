import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import { Container, IconFooter } from '../components/authScreens';
import Text from '../components/styles/Text';
import { Form, FormField, SubmitButton } from '../components/forms';

let validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required()
    .min(5)
    .max(50)
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\d/, 'Password must have a number')
    .label('Password'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required()
    .label('Confirm password'),
});

const PasswordChangedScreen = ({ navigation }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <TextBox>
            <Text title2>Change Password</Text>
            <Text body center>
              Please enter a new password and confirm it
            </Text>
          </TextBox>
          <Form
            initialValues={{ newPassword: '', confirmNewPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => navigation.navigate('Login')}
          >
            <FormField
              allowFontScaling={false}
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              icon="lock"
              keyboardAppearance="default"
              keyboardType="default"
              maxLength={50}
              name="newPassword"
              numberOfLines={1}
              placeholder="New Password"
              // returnKeyLabel="next"
              // returnKeyType="next"
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
              name="confirmNewPassword"
              numberOfLines={1}
              placeholder="Confirm New Password"
              // returnKeyLabel="go"
              // returnKeyType="go"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton label="Change password" />
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

export default PasswordChangedScreen;

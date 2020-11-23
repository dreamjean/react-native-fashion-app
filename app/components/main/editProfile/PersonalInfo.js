import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import { Form, FormField, SubmitButton } from '../../forms';
import Text from '../../styles/Text';
import PickerGroup from './PickerGroup';

const genders = [
  {
    value: 'man',
    label: 'Male',
  },
  {
    value: 'woman',
    label: 'Female',
  },
];

let validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  password: Yup.string()
    .required()
    .min(5)
    .max(50)
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\d/, 'Password must have a number')
    .label('Password'),
});

const PersonalInfo = () => {
  return (
    <Box>
      <Text opacity={0.7} style={{ marginBottom: 12 }}>
        Account Information
      </Text>
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
        <PickerGroup data={genders} radio />
        <ButtonBox>
          <SubmitButton label="Change Info" />
        </ButtonBox>
      </Form>
    </Box>
  );
};

const Box = styled.ScrollView`
  ${({ theme: { space } }) => ({
    paddingHorizontal: space.l1,
  })}
`;

const ButtonBox = styled.View`
  ${({ theme: { space } }) => ({
    paddingHorizontal: space.l2,
  })}
`;

export default PersonalInfo;

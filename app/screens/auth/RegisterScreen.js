import styled from "styled-components";
import * as Yup from "yup";

import { Container, LinkFooter } from "../../components";
import { Form, FormField, SubmitButton } from "../../components/forms";
import { images } from "../../config";
import useFocusInput from "../../hooks/useFocusInput";
import { Text } from "../../styles";

let validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email("Invalid Email").label("Email"),
  password: Yup.string()
    .required()
    .min(5)
    .max(50)
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required()
    .label("Confirm password"),
});

const RegisterScreen = ({ navigation }) => {
  const { onRef, focusNextField } = useFocusInput();

  return (
    <>
      <Container image={images.bg2} imgRbr ltBorder>
        <TextBox>
          <Text title2>Create Account</Text>
          <Text body center mtp>
            Let us know what your name, email, and your password
          </Text>
        </TextBox>
        <Form
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="name"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="account-circle"
            keyboardAppearance="default"
            keyboardType="default"
            name="name"
            numberOfLines={1}
            onSubmitEditing={() => focusNextField("email")}
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
            blurOnSubmit={false}
            icon="email"
            keyboardAppearance="default"
            keyboardType="email-address"
            name="email"
            numberOfLines={1}
            onRef={onRef("email")}
            onSubmitEditing={() => focusNextField("password")}
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
            blurOnSubmit={false}
            icon="lock"
            keyboardAppearance="default"
            keyboardType="default"
            maxLength={50}
            name="password"
            numberOfLines={1}
            onRef={onRef("password")}
            onSubmitEditing={() => focusNextField("confirmPassword")}
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
            blurOnSubmit={false}
            icon="lock"
            keyboardAppearance="default"
            keyboardType="default"
            maxLength={50}
            name="confirmPassword"
            numberOfLines={1}
            onRef={onRef("confirmPassword")}
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
        onPress={() => navigation.navigate("Login")}
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

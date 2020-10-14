import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';

import SocialLogin from './SocialLogin';
import Text from '../styles/Text';

const LinkFooter = ({ title, action, onPress }) => {
  return (
    <Container>
      <SocialLogin />
      <TouchableWithoutFeedback onPress={onPress}>
        <Text1 button primary>
          {title} <Text2>{action}</Text2>
        </Text1>
      </TouchableWithoutFeedback>
    </Container>
  );
};

const Container = styled.View`
  height: 140px;
  align-items: center;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.secondary,
  })}
`;

const Text1 = styled(Text)`
  text-transform: none;
`;

const Text2 = styled(Text)`
  ${({ theme: { colors } }) => ({
    color: colors.primary,
  })}
`;

export default LinkFooter;

import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import Icon from '../Icon';
import colors from '../../config/colors';

const IconFooter = ({ onPress }) => {
  return (
    <Container>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Icon backgroundColor={colors.primary} iconName="close-outline" size={60} />
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  height: 100px;
  align-items: center;
  justify-content: center;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.secondary,
  })}
`;

export default IconFooter;

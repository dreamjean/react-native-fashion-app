// import { FontAwesome5Brands } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../../config';
// import Icon from '../Icon'
import Button from '../Button';

const CombinationButton = ({ ...rest }) => {
  return (
    <Container>
      {/* <FontAwesome5Brands name="monero" size={24} color="white" /> */}
      <Button
        bgColor={colors.primary}
        paddingHorizontal={80}
        textStyle={{ color: colors.white, marginVertical: 1 }}
        {...rest}
      />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-self: center;

  ${({ theme: { space } }) => ({
    marginVertical: space.l2,
  })}
`;

export default CombinationButton;

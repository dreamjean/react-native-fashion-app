import React from 'react';
import styled from 'styled-components';

import Text from '../styles/Text';

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return (
    <Box>
      <Description caption>{error}</Description>
    </Box>
  );
};

const Box = styled.View`
  width: 100%;
`;

const Description = styled(Text)`
  margin-top: 0;
  text-align: left;
  ${({ theme: { colors } }) => ({
    color: colors.danger,
  })};
`;

export default ErrorMessage;

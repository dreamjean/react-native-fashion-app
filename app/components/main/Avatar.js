import React from 'react';
import styled from 'styled-components';

import { images } from '../../config';
import Image from '../styles/Image';
import Text from '../styles/Text';

const Avatar = () => {
  return (
    <Container>
      <Box>
        <Image avatar source={images[0]} />
      </Box>
      <Text title2>Rokia</Text>
      <Text>rokia@demo.com</Text>
    </Container>
  );
};

const Container = styled.View`
  align-self: center;
  align-items: center;
  position: absolute;
  top: -35px;
`;

const Box = styled.View`
  ${({ theme: { space } }) => ({
    marginBottom: space.s,
  })}
`;

export default Avatar;

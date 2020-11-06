import React from 'react';
import styled from 'styled-components';

import { calendar, images } from '../../config';
import BorderBox from '../styles/BorderBox';
import Image from '../styles/Image';

const { CELL_NUM } = calendar;

const BackgroundStyled = () => {
  return (
    <Container>
      <Header />
      <BorderBox>
        <Image mdBorder up source={images[6]} />
      </BorderBox>
      <Box>
        <Image ratio source={images[6]} />
      </Box>
      <BorderBox style={{ marginTop: -CELL_NUM }} />
      <BorderBox>
        <Image mdBorder source={images[6]} />
      </BorderBox>
      <Footer />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const Header = styled.View`
  flex: 1;
  margin-bottom: -${CELL_NUM}px;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white,
    borderBottomRightRadius: radii.xl,
  })}
`;

const Box = styled.View`
  overflow: hidden;
  flex: 1;

  ${({ theme: { radii } }) => ({
    borderTopLeftRadius: radii.xl,
    borderBottomRightRadius: radii.xl,
  })}
`;

const Footer = styled.View`
  flex: 1;
  margin-top: -${CELL_NUM}px;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.secondary,
    borderTopLeftRadius: radii.xl,
  })};
`;

export default BackgroundStyled;

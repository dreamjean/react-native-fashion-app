import React from 'react';
import styled from 'styled-components';

import { calendar, images } from '../../../config';
import Image from '../../styles/Image';
import View from '../../styles/View';

const { MEDIUM_HEIGHT, CELL_NUM } = calendar;

const BackgroundStyled = () => {
  return (
    <View container>
      <Header />
      <View bdBox>
        <Image topCurve source={images[6]} />
      </View>
      <Box>
        <Image medium source={images[6]} />
      </Box>
      <View bdBox style={{ marginTop: -CELL_NUM }} />
      <View bdBox>
        <Image bottomCurve source={images[6]} />
      </View>
      <Footer />
    </View>
  );
};

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
  height: ${MEDIUM_HEIGHT}px;

  ${({ theme: { radii } }) => ({
    borderTopLeftRadius: radii.xl,
    borderBottomRightRadius: radii.xl,
    marginTop: -0.15,
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

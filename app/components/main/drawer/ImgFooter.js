import React from 'react';
import styled from 'styled-components';

import { calendar, images } from '../../../config';
import Image from '../../styles/Image';
import View from '../../styles/View';

const { FOOTER_IMGH } = calendar;

const ImgFooter = () => {
  return (
    <>
      <View bdBox>
        <Image topCurve source={images[6]} />
      </View>
      <Footer>
        <Image source={images[6]} />
      </Footer>
    </>
  );
};

const Footer = styled.View`
  overflow: hidden;

  ${({ theme: { radii } }) => ({
    borderTopLeftRadius: radii.xl,
    height: FOOTER_IMGH,
  })}
`;

export default ImgFooter;

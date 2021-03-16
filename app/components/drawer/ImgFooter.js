import React from 'react';
import styled from 'styled-components';

import { calendar, images } from '../../config';
import { Image, View } from '../../styles';

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
  margin-top: -0.15px;

  ${({ theme: { radii } }) => ({
    borderTopLeftRadius: radii.xl,
    height: FOOTER_IMGH,
  })}
`;

export default ImgFooter;

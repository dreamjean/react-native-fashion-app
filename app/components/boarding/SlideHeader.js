import React from 'react';
import Animated from 'react-native-reanimated';
import styled from 'styled-components';

import { calendar } from '../../config';
import Image from '../styles/Image';
import Text from '../styles/Text';

const { width, SLIDE_HEIGHT, CELL_NUM } = calendar;

const containerHeight = SLIDE_HEIGHT + CELL_NUM;

const SlideHeader = ({ backgroundColor, header, image, right, opacity }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];

  return (
    <Container>
      <HeaderContainer style={{ backgroundColor }}>
        <Animated.View
          style={[{ position: 'absolute', bottom: 5, alignSelf: 'center' }, { opacity }]}
        >
          <Image large source={image} />
        </Animated.View>
        <Header style={{ transform }}>
          <Text heading>{header}</Text>
        </Header>
      </HeaderContainer>
      <Medium style={{ backgroundColor }} />
    </Container>
  );
};

const Container = styled.View`
  width: ${width}px;
  height: ${containerHeight}px;
`;

const Header = styled.View`
  height: 100px;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.View`
  width: 100%;
  height: ${SLIDE_HEIGHT}px;

  ${({ theme: { radii } }) => ({
    borderBottomRightRadius: radii.xl,
  })}
`;

const Medium = styled.View`
  height: ${CELL_NUM}px;
`;

export default SlideHeader;

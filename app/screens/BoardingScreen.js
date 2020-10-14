import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import Animated, { multiply, interpolate, Extrapolate } from 'react-native-reanimated';

import { SlideHeader, SlideFooter, PaginationDot } from '../components/boarding';
import slides from '../data/slides';
import calendar from '../config/calendar';

const { width, CELL_NUM } = calendar;

const BoardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scroll = useRef(Animated.ScrollView);

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.round(scrollX / width));
  };

  return (
    <Container>
      <StatusBar style="light" />
      <HeaderContainer>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          onScroll={handleScroll}
          pagingEnabled
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
        >
          {slides.map(({ header }, index) => {
            let opacity = interpolate(currentIndex, {
              inputRange: [index - 0.5, index, index + 0.5],
              outputRange: [0.6, 1, 0.6],
              extrapolate: Extrapolate.CLAMP,
            });

            return (
              <SlideHeader
                key={index}
                backgroundColor={header.bgColor}
                header={header.name}
                image={header.imageUrl}
                right={!!(index % 2)}
                opacity={opacity}
              />
            );
          })}
        </Animated.ScrollView>
      </HeaderContainer>

      <FooterContainer>
        <Dots>
          {slides.map((_, index) => (
            <PaginationDot key={index} index={index} currentIndex={currentIndex} />
          ))}
        </Dots>
        <Animated.View
          style={{
            flexDirection: 'row',
            width: width * slides.length,
            transform: [{ translateX: multiply(currentIndex * width, -1) }],
          }}
        >
          {slides.map(({ footer }, index) => (
            <SlideFooter
              key={index}
              title={footer.title}
              description={footer.description}
              label={footer.btLabel}
              primary={footer.btLabel !== 'next'}
              onPress={() => {
                const last = index === slides.length - 1;
                if (last) navigation.navigate('Welcome');
                scroll.current?.getNode().scrollTo({ x: width * (index + 1), animated: true });
              }}
            />
          ))}
        </Animated.View>
      </FooterContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const HeaderContainer = styled.View`
  width: ${width}px;
`;

const Dots = styled.View`
  flex-direction: row;
  height: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const FooterContainer = styled.View`
  flex: 1;
  margin-top: -${CELL_NUM}px;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white,
    borderTopLeftRadius: radii.xl,
  })}
`;

export default BoardingScreen;

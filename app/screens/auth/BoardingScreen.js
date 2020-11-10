import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import Animated, {
  Extrapolate,
  interpolateNode,
  multiply,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import styled from 'styled-components';

import { PaginationDot, SlideFooter, SlideHeader } from '../../components/auth/boarding';
import View from '../../components/styles/View';
import { calendar } from '../../config';
import slides from '../../data/slides';

const { width, CELL_NUM } = calendar;

const BoardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scroll = useRef();

  const scrollX = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
      setCurrentIndex(Math.round(scrollX.value / width));
    },
  });

  return (
    <View container>
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
            let opacity = interpolateNode(currentIndex, {
              inputRange: [
                index - 0.50000000001,
                index - 0.5,
                index,
                index + 0.5,
                index + 0.50000000001,
              ],
              outputRange: [0.5, 1, 1, 1, 0.5],
              extrapolate: Extrapolate.CLAMP,
            });

            return (
              <SlideHeader
                key={index}
                backgroundColor={header.bgColor}
                header={header.name}
                image={header.image}
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
                scroll.current.scrollTo({ x: width * (index + 1), animated: true });
              }}
            />
          ))}
        </Animated.View>
      </FooterContainer>
      <StatusBar style="light" />
    </View>
  );
};

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

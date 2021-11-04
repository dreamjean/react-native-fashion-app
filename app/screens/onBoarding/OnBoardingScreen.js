import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import styled from "styled-components";

import {
  PaginationDot,
  SlideFooter,
  SlideHeading,
  SlideImage,
} from "../../components";
import { constants } from "../../config";
import slides from "../../data/slides";
import { View } from "../../styles";

const { width, CELL_NUM, SLIDE_HEIGHT } = constants;

const OnBoardingScreen = ({ navigation }) => {
  const scroll = useRef();
  const x = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });

  const backgroundColor = useDerivedValue(() =>
    interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map((slide) => slide.color)
    )
  );

  const styleb1 = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  const styleb2 = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  const activeIndex = useDerivedValue(() => x.value / width);

  const footerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -x.value }],
  }));

  return (
    <View container>
      <Animated.View
        style={[
          {
            width: width,
            height: SLIDE_HEIGHT,
            borderBottomRightRadius: CELL_NUM,
          },
          styleb1,
        ]}
      >
        {slides.map(({ picture }, index) => {
          const style = useAnimatedStyle(() => ({
            opacity: interpolate(
              x.value,
              [(index - 0.5) * width, index * width, (index + 0.5) * width],
              [0, 1, 0],
              Extrapolate.CLAMP
            ),
          }));
          return (
            <SlideImage key={index} image={picture} opacityStyle={style} />
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          onScroll={handleScroll}
          pagingEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        >
          {slides.map(({ heading }, index) => (
            <SlideHeading key={index} header={heading} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <Animated.View style={[{ height: CELL_NUM }, styleb2]} />

      <FooterContainer>
        <Dots>
          {slides.map((_, index) => (
            <PaginationDot
              key={index}
              index={index}
              currentIndex={activeIndex}
            />
          ))}
        </Dots>
        <Animated.View
          style={[
            {
              flexDirection: "row",
              width: width * slides.length,
            },
            footerStyle,
          ]}
        >
          {slides.map((slide, index) => (
            <SlideFooter
              key={index}
              title={slide.title}
              description={slide.description}
              label={slide.btLabel}
              primary={slide.btLabel !== "next"}
              onPress={() => {
                const last = index === slides.length - 1;
                if (last) navigation.navigate("Welcome");

                scroll.current.scrollTo({
                  x: width * (index + 1),
                  animated: true,
                });
              }}
            />
          ))}
        </Animated.View>
      </FooterContainer>
      <StatusBar style="light" />
    </View>
  );
};

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

export default OnBoardingScreen;

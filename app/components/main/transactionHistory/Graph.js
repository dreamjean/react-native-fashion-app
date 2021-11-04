import Animated, { useAnimatedStyle } from "react-native-reanimated";
import styled from "styled-components";

import { colors, constants } from "../../../config";
import { Text } from "../../../styles";
import Underlay from "./Underlay";

// linear interpolation 线性插值
// 两个向量之间的线形插值。当t为0时返回的是v0  t为1时 返回的是v1  所以第三个参数应该是取一个 0~1的渐变值
const lerp = (v0, v1, t) => (1 - t) * v0 + t * v1;

const { GRAPH_WIDTH, GRAPH_HEIGHT } = constants;

const Graph = ({ data, scaleY }) => {
  const step = GRAPH_WIDTH / data.length;
  const columnWith = step * 0.32;
  const peakHeight = columnWith * 1.45;
  const dates = data.map((p) => p.date);

  const stylez = useAnimatedStyle(() => {
    const currentHeight = GRAPH_HEIGHT * scaleY.value;
    const translateY = (GRAPH_HEIGHT - currentHeight) / 2;

    return {
      transform: [{ translateY }, { scaleY: scaleY.value }],
    };
  });

  return (
    <Container>
      <Underlay {...{ dates, step }} />
      <Animated.View
        style={[
          {
            position: "absolute",
            top: 0,
            right: 0,
            height: GRAPH_HEIGHT,
            width: GRAPH_WIDTH,
            backgroundColor: colors.lightGrey2,
          },
          stylez,
        ]}
      >
        {data.map((point, i) => {
          const totalHeight = lerp(0, GRAPH_HEIGHT, point.value / 500);

          if (point.value === 0) {
            return null;
          }

          return (
            <ColumnWrapper
              key={i}
              style={{
                left: i * step,
                width: step,
                height: totalHeight,
              }}
            >
              <Text
                style={{
                  opacity: 0.5,
                  fontSize: 9,
                  position: "absolute",
                  alignSelf: "center",
                  bottom: totalHeight + 4,
                }}
              >
                {point.value}
              </Text>
              <Column
                style={{ backgroundColor: point.color, width: columnWith }}
              />
              <Peak
                style={{
                  backgroundColor: point.color,
                  width: columnWith,
                  height: peakHeight,
                }}
              />
            </ColumnWrapper>
          );
        })}
      </Animated.View>
    </Container>
  );
};

const Container = styled.View`
  ${({ theme: { space } }) => ({
    marginTop: space.l2,
    marginRight: space.m2,
    height: GRAPH_HEIGHT + space.xl,
  })}
`;

const ColumnWrapper = styled.View`
  position: absolute;
  bottom: 0;
`;

const Column = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  align-self: center;

  ${({ theme: { radii } }) => ({
    borderTopLeftRadius: radii.m2,
    borderTopRightRadius: radii.m2,
    opacity: 0.15,
  })}
`;

const Peak = styled.View`
  position: absolute;
  top: 0;
  align-self: center;

  ${({ theme: { radii } }) => ({
    borderRadius: radii.m2,
  })}
`;

export default Graph;

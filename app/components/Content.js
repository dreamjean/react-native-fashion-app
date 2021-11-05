import Svg, { ClipPath, Defs, Image, Path } from "react-native-svg";

import { colors, constants, images } from "../config";
import { View } from "../styles";

const { width, CELL_NUM } = constants;
const x = width;
const y = CELL_NUM * 2;

const midX = width - CELL_NUM;
const midY = CELL_NUM;
const radius = CELL_NUM;

{
  /* 从右下角开始 M:起始坐标(x y) / V: 垂直画一条直线到(y: 0) / A: x半径(75) y半径(75) / 椭圆弧的x-axis-rotation（x轴旋转角度）是0 / 弧长large-arc(0小弧即弧线小于180度) / 方向(1逆时针) 终点sweep(midX, midY) / H: 水平画一条直线到(midY) / A: x半径(75) y半径(75) / x轴旋转指示椭圆整体如何相对于当前坐标系旋转（以度为单位）(0) / 弧长(0小弧) / 方向(0顺时针) 终点sweep(0 y) / Z:关闭路径 */
}
const d = `M ${x} ${y} V 0 A ${radius} ${radius} 0 0 1 ${midX} ${midY} H ${midY} A ${radius} ${radius} 0 0 0 0 ${y} Z`;

const Content = ({ children, image = images.bg1 }) => {
  return (
    <View container>
      {children}
      <Svg
        width="100%"
        height={CELL_NUM * 2}
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      >
        <Defs>
          <ClipPath id="clip">
            <Path d={d} fill={colors.primary} style={{ overflow: "hidden" }} />
          </ClipPath>
        </Defs>

        <Image
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          href={image}
          clipPath="url(#clip)"
        />
      </Svg>
    </View>
  );
};

export default Content;

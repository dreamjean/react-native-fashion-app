import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

import { colors, constants } from "../../../config";

const { width, CELL_NUM, CART_BAR_HEIGHT } = constants;
const x = width;
const y = CELL_NUM + CART_BAR_HEIGHT;

const midX1 = CELL_NUM;
const midX2 = width - CELL_NUM;
const midY1 = CART_BAR_HEIGHT - CELL_NUM;
const midY2 = CART_BAR_HEIGHT;
const radius = CELL_NUM;

{
  /* 从右上角开始 M:起始坐标(x y) / V: 垂直画一条直线到(y: 0) / A: x半径(75) y半径(75) / 椭圆弧的x-axis-rotation（x轴旋转角度）是0 / 弧长large-arc(0小弧即弧线小于180度) / 方向(1逆时针) 终点sweep(midX, midY) / H: 水平画一条直线到(midY) / A: x半径(75) y半径(75) / x轴旋转指示椭圆整体如何相对于当前坐标系旋转（以度为单位）(0) / 弧长(0小弧) / 方向(0顺时针) 终点sweep(0 y) / Z:关闭路径 */
}
const d = `M 0 0 H ${x} V ${y} A ${radius} ${radius} 0 0 0 ${midX2} ${midY2} H ${midX1} A ${radius} ${radius} 0 0 1 0 ${midY1} Z`;

const TopContent = () => {
  return (
    <View pointerEvents="none">
      <Svg
        width="100%"
        height={y}
        style={{ position: "absolute", Top: 0, left: 0, right: 0 }}
      >
        <Path d={d} fill={colors.primary} style={{ overflow: "hidden" }} />
      </Svg>
    </View>
  );
};

export default TopContent;

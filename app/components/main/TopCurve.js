import Svg, { Path } from "react-native-svg";

import { colors, constants } from "../../config";

const { CELL_NUM, FOOTER_HEIGHT } = constants;

const TopCurve = () => {
  return (
    <Svg
      width={CELL_NUM}
      height={CELL_NUM}
      style={{
        position: "absolute",
        bottom: FOOTER_HEIGHT,
        right: 0,
      }}
      viewBox="0 0 1 1"
    >
      {/* 从左下角开始 M:起始坐标(0 1) / A: x半径(1) y半径(1) / x轴旋转指示椭圆整体如何相对于当前坐标系旋转（以度为单位）(0) / 弧长(0小弧) / 方向(0逆时针) 弧形终点(1 0) / L:终点(x y) */}
      <Path d="M 0 1 A 1 1 0 0 0 1 0 L 1 1" fill={colors.secondary} />
    </Svg>
  );
};

export default TopCurve;

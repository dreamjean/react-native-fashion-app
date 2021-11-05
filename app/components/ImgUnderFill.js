import Svg, { Path } from "react-native-svg";

import { colors, constants, images } from "../config";
import { Image, View } from "../styles";

const { width, CELL_NUM } = constants;
const x = width;
const y = CELL_NUM * 2;

const midX = width - CELL_NUM;
const midY = CELL_NUM;
const radius = CELL_NUM;

const d = `M 0 0 H ${x} A ${radius} ${radius} 0 0 1 ${midX} ${midY} H ${midY} A ${radius} ${radius} 0 0 0 0 ${y} Z`;

const ImgUnderFill = ({ image = images.bg1, children }) => {
  return (
    <View container>
      <View footer>
        <Image source={image} />
        <Image source={image} />
      </View>
      {children}
      <Svg width="100%" height={CELL_NUM * 2}>
        <Path d={d} fill={colors.white} />
      </Svg>
    </View>
  );
};

export default ImgUnderFill;

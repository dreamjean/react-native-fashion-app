import Animated from "react-native-reanimated";

import { Image } from "../../styles";

const SlideImage = ({ image, opacityStyle }) => {
  return (
    <Animated.View
      style={[
        { position: "absolute", alignSelf: "center", bottom: 5 },
        opacityStyle,
      ]}
    >
      <Image large source={image} />
    </Animated.View>
  );
};

export default SlideImage;

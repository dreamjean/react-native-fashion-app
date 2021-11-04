import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const SvgIcon = ({ IconName, width, height, color, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Box>
        <IconName width={width} height={height} color={color} />
      </Box>
    </TouchableOpacity>
  );
};

const Box = styled.View`
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.m2,
    marginHorizontal: space.m2,
  })};
`;

export default SvgIcon;

import { useState } from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { colors, constants } from "../../../config";
import IconButton from "../../IconButton";

const { OUTFIT_WIDTH } = constants;

const Outfit = ({ item }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setSelected((prev) => !prev);
        item.selected = !item.selected;
      }}
      style={({ pressed }) => ({
        opacity: pressed ? 0.6 : 1,
      })}
    >
      <Box
        style={{
          backgroundColor: item.color,
          height: OUTFIT_WIDTH * item.aspectRatio,
        }}
      >
        {selected && (
          <IconButton
            iconName="check-bold"
            backgroundColor={colors.primary}
            color={colors.white}
            size={24}
          />
        )}
      </Box>
    </Pressable>
  );
};

const Box = styled.View`
  width: ${OUTFIT_WIDTH}px;
  align-items: flex-end;

  ${({ theme: { space, radii } }) => ({
    borderRadius: radii.s2,
    marginTop: space.m1,
    marginLeft: space.s2,
    padding: space.m1,
  })};
`;

export default Outfit;

import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import styled from "styled-components";

import { colors } from "../../../../config";
import IconButton from "../../../IconButton";

const RightAction = ({ onAdd, onMinus }) => {
  return (
    <>
      <LinearGradient
        colors={[colors.white, colors.lightCyan]}
        start={[0.1, 0.5]}
        end={[0.9, 0.5]}
        style={StyleSheet.absoluteFill}
      />
      <Box>
        <IconButton
          iconName="plus"
          size={26}
          backgroundColor={colors.primary}
          onPress={onAdd}
        />
        <IconButton
          iconName="minus"
          size={26}
          backgroundColor={colors.danger}
          onPress={onMinus}
        />
      </Box>
    </>
  );
};

const Box = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: flex-end;

  ${({ theme: { space } }) => ({
    paddingRight: space.m1,
  })}
`;

export default RightAction;

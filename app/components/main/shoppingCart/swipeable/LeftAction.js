import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { colors, constants } from "../../../../config";
import { Text } from "../../../../styles";

const { width, LEFT_ACTION_WIDTH } = constants;

const LeftAction = ({ onPress }) => {
  return (
    <Container>
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={[colors.danger, colors.white]}
        start={[0.7, 0.5]}
        end={[1, 0.5]}
      />
      <RemoveButton onPress={onPress}>
        <Text title3 white>
          Remove
        </Text>
      </RemoveButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding-left: ${width - LEFT_ACTION_WIDTH}px;
`;

const RemoveButton = styled(RectButton)`
  flex: 1;
  width: ${LEFT_ACTION_WIDTH}px;
  justify-content: center;

  ${({ theme: { space } }) => ({
    paddingLeft: space.m1,
  })}
`;

export default LeftAction;

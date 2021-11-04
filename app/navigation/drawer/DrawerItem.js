import { Pressable } from "react-native";
import styled from "styled-components";

import { Icon } from "../../components";
import { colors } from "../../config";
import { Text } from "../../styles";

const DrawerItem = ({ label, icon, color, focused, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: pressed ? colors.lightCyan : "transparent",
        borderRadius: 10,
        marginTop: 5,
        opacity: pressed ? 0.5 : 1,
        overflow: "hidden",
      })}
    >
      <Box {...{ focused }}>
        <Icon
          iconName={icon}
          iconRatio={0.6}
          size={36}
          backgroundColor={color}
        />
        <Title caption {...{ focused }}>
          {label}
        </Title>
      </Box>
    </Pressable>
  );
};

const Box = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ focused, theme: { space, colors } }) => ({
    backgroundColor: focused ? colors.violet2 : colors.white,
    padding: space.m1,
  })}
`;

const Title = styled(Text)`
  ${({ focused, theme: { colors, size, space } }) => ({
    color: focused ? colors.primary : colors.sencodary,
    fontSize: focused ? size.l2 : size.l,
    fontWeight: focused ? "bold" : "500",
    marginLeft: space.m2,
  })}
`;

export default DrawerItem;

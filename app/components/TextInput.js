import { MaterialCommunityIcons } from "@expo/vector-icons";
import { forwardRef } from "react";
import styled from "styled-components";

import { colors } from "../config";
import Icon from "./Icon";

const TextInput = forwardRef(({ icon, error, touched, ...rest }, ref) => {
  const dangerPrimery = error ? colors.danger : colors.primary;
  const reColor = !touched ? colors.violet : dangerPrimery;

  return (
    <Box style={{ borderColor: reColor }}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={reColor} />}
      <Input
        {...rest}
        {...{ ref }}
        placeholderTextColor={touched ? colors.violet : colors.grey2}
        selectionColor={colors.primary}
        underlineColorAndroid="transparent"
      />
      {touched && (
        <Icon
          iconName={error ? "close" : "check"}
          size={22}
          backgroundColor={reColor}
        />
      )}
    </Box>
  );
});

const Box = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.violet2,
    borderRadius: radii.s1,
    padding: space.s2,
    marginVertical: space.s1,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, size, space, getFont } }) => ({
    color: colors.text,
    fontSize: size.xl,
    fontFamily: getFont(2),
    marginHorizontal: space.s2,
  })}
`;

export default TextInput;

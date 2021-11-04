import styled from "styled-components";

import { colors } from "../../config";
import { Text } from "../../styles";
import IconButton from "../IconButton";

const HeaderBar = ({
  bgColor,
  title,
  left,
  right,
  dark = false,
  white = false,
}) => {
  const color = dark ? colors.white : colors.text;
  const backgroundColor = bgColor
    ? bgColor
    : dark
    ? colors.primary
    : colors.grey;

  return (
    <Wrapper>
      <IconButton
        iconName={left.icon}
        backgroundColor={backgroundColor}
        color={color}
        size={dark ? 32 : 36}
        iconRatio={0.6}
        onPress={left.onPress}
      />
      <Text caption upper white={white}>
        {title}
      </Text>
      {right ? (
        <IconButton
          iconName={right.icon}
          backgroundColor={backgroundColor}
          color={color}
          size={dark ? 32 : 36}
          iconRatio={0.6}
          onPress={right.onPress}
        />
      ) : (
        <Placeholder />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginTop: space.l1 + space.s1,
    paddingHorizontal: space.m2,
  })}
`;

const Placeholder = styled.View`
  width: 36px;
`;

export default HeaderBar;

import { useState } from "react";
import styled from "styled-components";

import { colors } from "../../../config";
import { Text } from "../../../styles";

const Notification = ({ title, description }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Container>
      <TextBox>
        <Text title3 mbt>
          {title}
        </Text>
        <Text body opacity={0.8}>
          {description}
        </Text>
      </TextBox>
      <Switch
        trackColor={{ false: colors.grey2, true: colors.purple }}
        thumbColor={isEnabled ? colors.primary : colors.white}
        value={isEnabled}
        onValueChange={() => setIsEnabled((prev) => !prev)}
      />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.l2,
    marginVertical: space.m1,
  })}
`;

const TextBox = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    marginRight: space.s2,
  })}
`;

const Switch = styled.Switch``;

export default Notification;

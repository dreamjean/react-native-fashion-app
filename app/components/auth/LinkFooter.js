import { TouchableOpacity } from "react-native";
import styled from "styled-components";

import { Text } from "../../styles";
import SocialLogin from "./SocialLogin";

const LinkFooter = ({ title, action, onPress }) => {
  return (
    <Container>
      <SocialLogin />
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Text1 button primary>
          {title} <Text2>{action}</Text2>
        </Text1>
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  height: 120px;
  align-items: center;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.secondary,
  })}
`;

const Text1 = styled(Text)`
  text-transform: none;
`;

const Text2 = styled(Text)`
  ${({ theme: { colors } }) => ({
    color: colors.primary,
  })}
`;

export default LinkFooter;

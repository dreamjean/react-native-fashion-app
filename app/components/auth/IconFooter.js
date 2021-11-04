import styled from "styled-components";

import { colors } from "../../config";
import IconButton from "../IconButton";

const IconFooter = ({ onPress }) => {
  return (
    <Container>
      <IconButton
        {...{ onPress }}
        backgroundColor={colors.primary}
        iconName="close-outline"
        size={60}
      />
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 100px;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.secondary,
  })}
`;

export default IconFooter;

import styled from "styled-components";

import { Text } from "../../styles";
import Button from "../Button";

const SlideFooter = ({ title, description, ...rest }) => {
  return (
    <Footer>
      <TextContainer>
        <Text title1>{title}</Text>
        <Text body center mtp>
          {description}
        </Text>
      </TextContainer>
      <Button space paddingHorizontal={40} {...rest} />
    </Footer>
  );
};

const Footer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: ${({ theme: { space } }) => space.xl}px;
`;

const TextContainer = styled.View`
  justify-content: center;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginTop: space.l2,
    marginBottom: space.l1,
  })}
`;

export default SlideFooter;

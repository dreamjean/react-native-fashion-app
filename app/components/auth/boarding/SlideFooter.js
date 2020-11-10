import React from 'react';
import styled from 'styled-components';

import Button from '../../Button';
import Text from '../../styles/Text';

const SlideFooter = ({ title, description, ...rest }) => {
  return (
    <Footer>
      <TextContainer>
        <Text title1>{title}</Text>
        <Text body center mtp>
          {description}
        </Text>
      </TextContainer>
      <Button {...rest} />
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

import React from 'react';
import styled from 'styled-components';

import Text from '../styles/Text';
import Button from '../Button';

const SlideFooter = ({ title, description, ...otherProps }) => {
  return (
    <Footer>
      <TextContainer>
        <Text title1>{title}</Text>
        <Text body center>
          {description}
        </Text>
      </TextContainer>
      <Button {...otherProps} />
    </Footer>
  );
};

const Footer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: ${({ theme: { space } }) => space.xxl}px;
`;

const TextContainer = styled.View`
  justify-content: center;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginTop: space.xl,
    marginBottom: space.l,
  })}
`;

export default SlideFooter;

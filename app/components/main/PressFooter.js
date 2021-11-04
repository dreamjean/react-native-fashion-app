import styled from "styled-components";

import Button from "../Button";

const PressFooter = ({ height, tlBorder = true, ...rest }) => {
  return (
    <Wrapper {...{ tlBorder, height }}>
      <Button primary paddingHorizontal={40} {...rest} />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;

  ${({ tlBorder, height, theme: { colors, radii } }) => ({
    backgroundColor: colors.secondary,
    borderTopLeftRadius: tlBorder ? radii.xl : radii.n,
    height,
  })}
`;

export default PressFooter;

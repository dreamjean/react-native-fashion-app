import styled from "styled-components";

import { Text } from "../../styles";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return (
    <Box>
      <Description caption>{error}</Description>
    </Box>
  );
};

const Box = styled.View`
  width: 100%;
`;

const Description = styled(Text)`
  text-align: left;

  ${({ theme: { colors, space } }) => ({
    color: colors.danger,
    marginTop: space.n,
  })};
`;

export default ErrorMessage;

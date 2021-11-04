import styled from "styled-components";

import { constants } from "../config";

const Border = ({ style, blBorder, brBorder }) => {
  return (
    <Box {...{ style }}>
      <Background {...{ blBorder, brBorder }} />
    </Box>
  );
};

const Background = styled.View`
  height: ${constants.CELL_NUM}px;
  width: 100%;

  ${({ blBorder, brBorder, theme: { colors, radii } }) => ({
    backgroundColor: colors.white,
    borderBottomLeftRadius: blBorder ? radii.xl : radii.n,
    borderBottomRightRadius: brBorder ? radii.xl : radii.n,
  })}
`;

const Box = styled.View`
  ${({ theme: { colors } }) => ({
    backgroundColor: colors.secondary,
  })}
`;

export default Border;

import styled from 'styled-components';

import { calendar } from '../../config';

const BorderBox = styled.View`
  height: ${calendar.CELL_NUM}px;
  overflow: hidden;
  z-index: -1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.secondary,
  })}
`;

export default BorderBox;

import styled, { css } from 'styled-components';

import { calendar } from '../../config';

const bdBoxStyle = css`
  height: ${calendar.CELL_NUM}px;
  overflow: hidden;
  z-index: -1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.secondary,
  })}
`;

const containerStyle = css`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const headingStyle = css`
  height: 140px;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.secondary,
    borderBottomRightRadius: radii.xl,
  })}
`;

const View = styled.View`
  ${({ bdBox }) => bdBox && bdBoxStyle}
  ${({ container }) => container && containerStyle};
  ${({ heading }) => heading && headingStyle};
`;

export default View;

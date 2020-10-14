import styled, { css } from 'styled-components';

import calendar from '../../config/calendar';

const { width, BAR_HEIGHT, CELL_NUM, IMG_HEIGHT } = calendar;

const borderStyle = css`
  width: ${width}px;
  height: ${IMG_HEIGHT}px;
  top: -${BAR_HEIGHT}px;
`;

const headerStyle = css`
  width: ${width}px;
  height: ${IMG_HEIGHT}px;
  border-bottom-left-radius: ${CELL_NUM}px;
`;

const mediumStyle = css`
  width: 260px;
  height: 360px;
`;

const largeStyle = css`
  width: 280px;
  height: 400px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;

  ${({ border }) => border && borderStyle}
  ${({ header }) => header && headerStyle}
  ${({ medium }) => medium && mediumStyle}
  ${({
    large,
  }) => large && largeStyle}
`;

export default Image;

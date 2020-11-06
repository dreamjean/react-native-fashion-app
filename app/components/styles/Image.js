import styled, { css } from 'styled-components';

import { calendar } from '../../config';

const { width, BAR_HEIGHT, IMG_HEIGHT, CELL_NUM, MEDIUM_HEIGHT } = calendar;

const avatarStyle = css`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  border-width: 3px;

  ${({ theme: { colors, space } }) => ({
    borderColor: colors.violet,
    marginBottom: space.s1,
  })}
`;

const borderStyle = css`
  width: ${width}px;
  height: ${IMG_HEIGHT}px;
  top: -${BAR_HEIGHT}px;
`;

const ratioStyle = css`
  width: ${width}px;
  height: ${IMG_HEIGHT}px;
`;

const mdBorderStyle = css`
  width: ${width}px;
  height: ${IMG_HEIGHT}px;

  ${({ up }) => ({
    top: up ? -(IMG_HEIGHT - CELL_NUM) : -MEDIUM_HEIGHT,
  })}
`;

const smallStyle = css`
  width: 260px;
  height: 360px;
`;

const largeStyle = css`
  width: 280px;
  height: 400px;
`;

const Image = styled.Image`
  ${({ avatar }) => avatar && avatarStyle}
  ${({ border }) => border && borderStyle}
  ${({ ratio }) => ratio && ratioStyle};
  ${({ mdBorder }) => mdBorder && mdBorderStyle};
  ${({ small }) => small && smallStyle};
  ${({ large }) => large && largeStyle}
`;

export default Image;

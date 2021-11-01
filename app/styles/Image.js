import styled, { css } from "styled-components";

import { constants } from "../config";

const { width, BAR_HEIGHT, IMG_HEIGHT, CELL_NUM, MEDIUM_HEIGHT } = constants;

const avatarStyle = css`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  border-width: 2px;

  ${({ theme: { colors, space } }) => ({
    borderColor: colors.violet,
    marginBottom: space.s1,
  })}
`;

const barCurveStyle = css`
  top: -${BAR_HEIGHT}px;
`;

const topCurveStyle = css`
  top: -${IMG_HEIGHT - CELL_NUM}px;
`;

const bottomCurveStyle = css`
  top: -${MEDIUM_HEIGHT}px;
`;

const logoStyle = css`
  ${({ primary, theme: { space } }) => ({
    width: primary ? 60 : 55,
    height: primary ? 20 : 30,
    margin: primary ? space.s1 : space.n,
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
  width: ${width}px;
  height: ${IMG_HEIGHT}px;

  ${({ barCurve }) => barCurve && barCurveStyle};
  ${({ bottomCurve }) => bottomCurve && bottomCurveStyle};
  ${({ topCurve }) => topCurve && topCurveStyle};

  /* picture style */
  ${({ avatar }) => avatar && avatarStyle}
  ${({ small }) => small && smallStyle};
  ${({ large }) => large && largeStyle}
  ${({ logo }) => logo && logoStyle}
`;

export default Image;

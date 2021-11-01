import styled, { css } from "styled-components";

const headingStyle = css`
  text-align: center;
  line-height: 80px;

  ${({ theme: { colors, size, getFont } }) => ({
    fontFamily: getFont(0),
    fontSize: size.heading,
    color: colors.white,
    opacity: 0.9,
  })};
`;

const title1Style = css`
  ${({ theme: { colors, size, getFont } }) => ({
    fontFamily: getFont(1),
    fontSize: size.title1,
    color: colors.text,
  })};
`;

const title2Style = css`
  ${({ theme: { colors, size, getFont } }) => ({
    fontFamily: getFont(1),
    fontSize: size.title2,
    color: colors.text,
  })};
`;

const title3Style = css`
  ${({ white, theme: { colors, size, getFont } }) => ({
    fontFamily: getFont(1),
    fontSize: size.xl,
    color: white ? colors.white : colors.text,
  })};
`;

const bodyStyle = css`
  line-height: 20px;

  ${({ theme: { space } }) => ({
    marginTop: space.xs,
  })}
`;

const buttonStyle = css`
  text-align: center;
  text-transform: capitalize;

  ${({ primary, theme: { colors, getFont, size } }) => ({
    color: primary ? colors.white : colors.text2,
    fontFamily: getFont(1),
    fontSize: size.m,
  })};
`;

const captionStyle = css`
  line-height: 24px;

  ${({ upper, white, theme: { getFont, colors, size } }) => ({
    fontFamily: getFont(1),
    fontSize: size.s,
    color: white ? colors.white : colors.text2,
    textTransform: upper ? "uppercase" : "none",
  })}
`;

const centerStyle = css`
  text-align: center;
`;

const mtpStyle = css`
  ${({ theme: { space } }) => ({
    marginTop: space.m1,
  })}
`;

const mbtStyle = css`
  ${({ theme: { space } }) => ({
    marginBottom: space.s1,
  })}
`;

const Text = styled.Text`
  ${({ theme: { colors, size, getFont } }) => ({
    color: colors.text2,
    fontSize: size.l,
    fontFamily: getFont(2),
  })}

  ${({ body }) => body && bodyStyle}
  ${({ button }) => button && buttonStyle};
  ${({ caption }) => caption && captionStyle};
  ${({ heading }) => heading && headingStyle}
  ${({ title1 }) => title1 && title1Style};
  ${({ title2 }) => title2 && title2Style}
  ${({ title3 }) => title3 && title3Style}

  /* position style */
  ${({ center }) => center && centerStyle}
  ${({ mtp }) => mtp && mtpStyle};
  ${({ mbt }) => mbt && mbtStyle};

  ${({ opacity }) => ({ opacity })};
`;

export default Text;

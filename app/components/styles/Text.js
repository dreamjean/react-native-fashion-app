import styled, { css } from 'styled-components';

const headingStyle = css`
  text-align: center;
  line-height: 80px;

  ${({ theme: { colors, size, getFont } }) => ({
    fontFamily: getFont(0),
    fontSize: size.heading,
    color: colors.white2,
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

const bodyStyle = css`
  line-height: 20px;

  ${({ theme: { colors, size, space, getFont } }) => ({
    color: colors.text2,
    fontSize: size.l,
    fontFamily: getFont(2),
    marginTop: space.xs,
  })}
`;

const buttonStyle = css`
  text-align: center;
  text-transform: uppercase;

  ${({ primary, theme: { colors, getFont, size } }) => ({
    color: primary ? colors.white : colors.text2,
    fontFamily: getFont(1),
    fontSize: size.m,
  })};
`;

const captionStyle = css`
  ${({ theme: { getFont, colors, size } }) => ({
    fontFamily: getFont(1),
    fontSize: size.s,
    color: colors.secondary,
  })}
`;

const centerStyle = css`
  text-align: center;
`;

const Text = styled.Text`
  ${({ body }) => body && bodyStyle}
  ${({ button }) => button && buttonStyle}
  ${({ caption }) => caption && captionStyle};
  ${({ heading }) => heading && headingStyle}
  ${({ title1 }) => title1 && title1Style};
  ${({ title2 }) => title2 && title2Style}

  /* position style */
  ${({ center }) => center && centerStyle}
`;

export default Text;

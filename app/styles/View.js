import { StyleSheet } from "react-native";
import styled, { css } from "styled-components";

import { constants } from "../config";

const borderStyle = css`
  height: ${constants.CELL_NUM}px;
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

const footerStyle = css`
  ${StyleSheet.absoluteFillObject}
  justify-content: flex-end;
`;

const pickerBoxStyle = css`
  flex-direction: row;
  flex-wrap: wrap;

  ${({ theme: { space } }) => ({
    marginTop: space.m1,
    marginBottom: space.s2,
  })}
`;

const pkSpaceStyle = css`
  ${({ theme: { space } }) => ({
    marginRight: space.s2,
    marginBottom: space.m1,
  })}
`;

const headingStyle = css`
  height: 130px;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.secondary,
    borderBottomRightRadius: radii.xl,
  })}
`;

const View = styled.View`
  ${({ bdBox }) => bdBox && borderStyle}
  ${({ container }) => container && containerStyle};
  ${({ footer }) => footer && footerStyle};
  ${({ pickerBox }) => pickerBox && pickerBoxStyle};
  ${({ pkSpace }) => pkSpace && pkSpaceStyle};
  ${({ heading }) => heading && headingStyle};
`;

export default View;

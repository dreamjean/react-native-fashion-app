import { Platform } from "react-native";

import colors from "./colors";

export const isIos = Platform.OS === "ios";

const getFont = (n) => (isIos ? fonts.ios[n] : fonts.android[n]);

const fonts = {
  ios: ["Proxima-Nova-Bold", "Proxima-Nova-Sbold", "Proxima-Nova-Reg"],
  android: ["Montserrat-Bold", "Montserrat-SemiBold", "Montserrat-Regular"],
};

const theme = {
  colors,
  size: {
    s: 12,
    m: 14,
    l: 15,
    l2: 16,
    xl: 18,
    title1: 21,
    title2: 27,
    heading: 70,
  },
  space: {
    n: 0,
    s1: 4,
    s2: 8,
    m1: 12,
    m2: 18,
    l1: 24,
    l2: 32,
    xl: 40,
    xxl: 75,
  },
  radii: {
    n: 0,
    s1: 4,
    s2: 10,
    m1: 20,
    m2: 25,
    l: 35,
    xl: 75,
  },
  getFont,
};

export default theme;

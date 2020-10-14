import { Platform } from 'react-native';

import colors from './colors';

export const isIos = Platform.OS === 'ios';

const getFont = (n) => (isIos ? fonts.ios[n] : fonts.android[n]);

const fonts = {
  ios: ['Proxima-Nova-Bold', 'Proxima-Nova-Sbold', 'Proxima-Nova-Reg'],
  android: ['Montserrat-Bold', 'Montserrat-SemiBold', 'Montserrat-Regular'],
};

const theme = {
  colors,
  size: {
    s: 12,
    m: 14,
    l: 15,
    xl: 18,
    title1: 21,
    title2: 25,
    heading: 70,
  },
  space: {
    b: 4,
    s: 8,
    xs: 15,
    m: 18,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  radii: {
    n: 0,
    s: 4,
    m: 10,
    xm: 20,
    l: 25,
    xl: 75,
    xxl: 100,
  },
  getFont,
};

export default theme;

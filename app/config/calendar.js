import { Dimensions } from 'react-native';

import theme from './theme';

const { width, height } = Dimensions.get('window');

const aspectRatio = 884 / 1300;
const SLIDE_HEIGHT = height * 0.61;
const SIDEBAR_HEIGHT = height * 0.56;
const IMG_HEIGHT = width * aspectRatio;
const BAR_HEIGHT = IMG_HEIGHT * 0.5;
const FOOTER_IMGH = IMG_HEIGHT * 0.35;
const FOOTER_HEIGHT = height * 0.15;
const MEDIUM_HEIGHT = IMG_HEIGHT * 0.68;
const CELL_NUM = 75;
const DRAWER_WIDTH = width * 0.8;
const CARD_WIDTH = width * 0.7;
const CARD_HEIGHT = width * 1.05;
const CTG_RADIUS = 30;
const OUTFIT_WIDTH = (width - theme.space.m2 * 3) / 2;
const GRAPH_WIDTH = width - theme.space.l2 * 2;
const GRAPH_HEIGHT = GRAPH_WIDTH * 0.63;
const TAB_WIDTH = (width - theme.space.l1 * 2) / 2;
const ROUND_PICKER = 20;
const CART_HEIGHT = height * 0.8;
const CART_MIN_HEIGHT = height * 0.3;

export default {
  height,
  width,
  BAR_HEIGHT,
  CARD_WIDTH,
  CARD_HEIGHT,
  CART_MIN_HEIGHT,
  CART_HEIGHT,
  CELL_NUM,
  CTG_RADIUS,
  DRAWER_WIDTH,
  FOOTER_IMGH,
  FOOTER_HEIGHT,
  GRAPH_WIDTH,
  GRAPH_HEIGHT,
  IMG_HEIGHT,
  MEDIUM_HEIGHT,
  OUTFIT_WIDTH,
  ROUND_PICKER,
  SIDEBAR_HEIGHT,
  SLIDE_HEIGHT,
  TAB_WIDTH,
};

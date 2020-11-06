import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const aspectRatio = 884 / 1300;
const SLIDE_HEIGHT = height * 0.61;
const SIDEBAR_HEIGHT = height * 0.56;
const IMG_HEIGHT = width * aspectRatio;
const BAR_HEIGHT = IMG_HEIGHT * 0.5;
const FOOTER_HEIGHT = IMG_HEIGHT * 0.3;
const MEDIUM_HEIGHT = IMG_HEIGHT * 0.8;
const CELL_NUM = 75;
const DRAWER_WIDTH = width * 0.8;
const CARD_WIDTH = width * 0.7;
const CARD_HEIGHT = width * 1.05;
const CTG_RADIUS = 30;

export default {
  height,
  width,
  BAR_HEIGHT,
  CARD_WIDTH,
  CARD_HEIGHT,
  CELL_NUM,
  CTG_RADIUS,
  DRAWER_WIDTH,
  FOOTER_HEIGHT,
  IMG_HEIGHT,
  SIDEBAR_HEIGHT,
  SLIDE_HEIGHT,
  MEDIUM_HEIGHT,
};

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const aspectRatio = 884 / 1300;
const SLIDE_HEIGHT = height * 0.61;
const SIDEBAR_HEIGHT = height * 0.56;
const IMG_HEIGHT = width * aspectRatio;
const BAR_HEIGHT = IMG_HEIGHT * 0.52;
const CELL_NUM = 75;

export default {
  height,
  width,
  BAR_HEIGHT,
  CELL_NUM,
  IMG_HEIGHT,
  SIDEBAR_HEIGHT,
  SLIDE_HEIGHT,
};

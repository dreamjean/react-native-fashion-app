import { Dimensions } from "react-native";

import theme from "./theme";

const { width, height } = Dimensions.get("window");

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
const CART_BAR_HEIGHT = height * 0.15;
const CART_HEIGHT = height * 0.85;
const CART_MIN_HEIGHT = height * 0.25;
const LIST_CARD = (CART_HEIGHT - CART_BAR_HEIGHT) * 0.19;
const RIGHT_ACTION_WIDTH = 80;
const LEFT_ACTION_WIDTH = 130;
const CDCARD_WIDTH = width * 0.35;
const CDCARD_HEIGHT = CDCARD_WIDTH * 1.25;
const KNOB_WIDTH = 50;
const KNOB_SLIDE_WIDTH = 300;

export default {
  height,
  width,
  BAR_HEIGHT,
  CARD_WIDTH,
  CARD_HEIGHT,
  CART_BAR_HEIGHT,
  CART_MIN_HEIGHT,
  CART_HEIGHT,
  CDCARD_WIDTH,
  CDCARD_HEIGHT,
  CELL_NUM,
  CTG_RADIUS,
  DRAWER_WIDTH,
  FOOTER_IMGH,
  FOOTER_HEIGHT,
  GRAPH_WIDTH,
  GRAPH_HEIGHT,
  IMG_HEIGHT,
  KNOB_WIDTH,
  KNOB_SLIDE_WIDTH,
  LEFT_ACTION_WIDTH,
  LIST_CARD,
  MEDIUM_HEIGHT,
  OUTFIT_WIDTH,
  RIGHT_ACTION_WIDTH,
  ROUND_PICKER,
  SIDEBAR_HEIGHT,
  SLIDE_HEIGHT,
  TAB_WIDTH,
};

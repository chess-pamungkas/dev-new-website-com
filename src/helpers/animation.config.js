import { easings } from "react-spring";

const ANIMATION_DURATION = 700;
const TEXT_ANIMATION_DURATION = 500;
const TWP_SECTION_ANIMATION_DURATION = 2000;

export const SPRING_CONFIG_BG = {
  config: { duration: ANIMATION_DURATION },
};

export const SPRING_CONFIG_TEXT = {
  config: { duration: TEXT_ANIMATION_DURATION },
};

export const TWP_SECTION_CONFIG_BG = {
  config: {
    duration: TWP_SECTION_ANIMATION_DURATION,
    easing: easings.easeInOutQuad,
  },
};

export const OPACITY_0 = {
  opacity: "0",
};

export const OPACITY_1 = {
  opacity: "1",
};

export const INTERSECTION_OBSERVER_CONFIG = {
  promo1: {
    threshold: [.0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],
    freezeOnceVisible: false,
  },
  promo2: {
    threshold: [.0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],
    freezeOnceVisible: false,
  },
  promo3: {
    threshold: [.0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],
    freezeOnceVisible: false,
  },
  textPromo4: {
    threshold: 0.9,
    freezeOnceVisible: true,
  },
  TWPSection: {
    threshold: 0.1,
    freezeOnceVisible: false,
  },
};

export const TWP_ICONS_INITIAL_SHIFT = {
  logo1: -430,
  logo2: -250,
  logo3: -270,
  netflix: -100,
  tesla: -200,
  airbnb: -50,
  meta: -100,
  amazon: -300,
  bitcoin: -250, 
};

export const setPositionY = value => ({ transform: `translateY(${value}px)` });

export const DEFAULT_WRAPPER_WIDTH = 90;
export const DELAY_BEFORE_NEXT_KEYWORD = 2000;
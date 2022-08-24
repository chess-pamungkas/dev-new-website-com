const ANIMATION_DURATION = 700;
const TEXT_ANIMATION_DURATION = 500;

export const SPRING_CONFIG_BG = {
  config: { duration: ANIMATION_DURATION },
};

export const SPRING_CONFIG_TEXT = {
  config: { duration: TEXT_ANIMATION_DURATION },
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
    threshold: 1,
    freezeOnceVisible: true,
  },
};

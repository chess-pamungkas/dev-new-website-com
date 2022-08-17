import {
  MARKETING_GET_PARAMS,
  SECT2_GROUP1_COUNT_OF_WORDS_DEFAULT,
  SECT2_GROUP1_DEFAULT,
  SECT2_GROUP2_DEFAULT,
} from "../marketing.config";

import _ from "lodash";

export const getRandomArray = (arr, count) => _.sampleSize(arr, count);

export const getDefaultSect2TextSequence = () => {
  const arrRandom = getRandomArray(
    SECT2_GROUP1_DEFAULT,
    SECT2_GROUP1_COUNT_OF_WORDS_DEFAULT
  );
  return _.concat(arrRandom, SECT2_GROUP2_DEFAULT);
};

const getParamsFromUrl = () => {
  return new URLSearchParams(window.location.search);
};

export const getMarketingParamsFromUrl = () => {
  return {
    content: getParamsFromUrl().get(MARKETING_GET_PARAMS.content),
    sect1: getParamsFromUrl().get(MARKETING_GET_PARAMS.sect1),
    sect2: getParamsFromUrl().get(MARKETING_GET_PARAMS.sect2),
  };
};

export const transformParamToKey = (param) => {
  const paramWithoutSymbols = _.replace(param, "+", " ");
  return _.lowerCase(paramWithoutSymbols);
};

import {
  MARKETING_GET_PARAMS,
  SECT2_GROUP1_COUNT_OF_WORDS_DEFAULT,
} from "../marketing.config";
import { navigate } from "gatsby";
import { isBrowser } from "./is-browser";
import { IB_PARAMS } from "./ib-service";

import _ from "lodash";

export const getRandomArray = (arr, count) => _.sampleSize(arr, count);

export const getSect2TextSequence = (group1, group2) => {
  const arrRandom = getRandomArray(group1, SECT2_GROUP1_COUNT_OF_WORDS_DEFAULT);
  return _.concat(arrRandom, group2);
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

export const CAMPAIGN_PARAMS = {
  campaign_code: "campaign_code",
};

export const getCampaignParamsAndSetToStorage = () => {
  if (isBrowser()) {
    const urlParams = getParamsFromUrl();
    const campaignCode = urlParams.get(CAMPAIGN_PARAMS.campaign_code);

    // Check if the URL parameter starts with `?${CAMPAIGN_PARAMS.campaign_code}=`
    if (
      window.location.search.startsWith(`?${CAMPAIGN_PARAMS.campaign_code}=`)
    ) {
      if (campaignCode) {
        localStorage.setItem(CAMPAIGN_PARAMS.campaign_code, campaignCode);
        localStorage.removeItem(IB_PARAMS.r_code);
      }
    }

    const { pathname } = window.location;
    navigate(pathname);
  }
};

export const setCampaignParamsToLink = () => {
  if (isBrowser()) {
    const campaign_code = localStorage.getItem(CAMPAIGN_PARAMS.campaign_code);

    // Check conditions and construct the query string accordingly
    if (campaign_code) {
      return `?${CAMPAIGN_PARAMS.campaign_code}=${campaign_code}`; // Only campaignCode
    }
  }

  return "";
};

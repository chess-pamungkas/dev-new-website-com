import { useTranslation as useI18nextTranslation } from "gatsby-plugin-react-i18next";
import { getLocalizationVariables } from "../localization-variables";

export const useTranslationWithVariables = () => {
  const { t } = useI18nextTranslation();

  const globalVariables = getLocalizationVariables();

  const translateWithVariables = (key, variables) => {
    const mergedVariables = { ...globalVariables, ...variables };
    return t(key, mergedVariables);
  };

  return {
    t: translateWithVariables,
  };
};

import { useCallback, useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { I18nextContext } from "gatsby-plugin-react-i18next";

export const useSearchData = () => {
  const { language } = useContext(I18nextContext); // current selected language
  const currentPageUrl =
    typeof window !== 'undefined' && window.location.pathname;

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          indexedLocaleData {
            en
            de
            fr
            pl
            pt
            da
            fi
            es
            ru
            ar
            nl
            sw
            ro
            it
            cn
            tw
            no
            cz
            vn
            th
            my
            id
            kr
            jp
            in
            bd
            gr
            ph
          }
        }
      }
    }
  `);

  const currentLocaleIndexedData = site.siteMetadata.indexedLocaleData[language];

  const getSearchResults = useCallback(query => {
    if (!query) return [];
    if (!currentLocaleIndexedData || !currentLocaleIndexedData.length) return [];

    const results = currentLocaleIndexedData.reduce((acc, piece) => {
      const [url, content] = piece.split('_');
      const isContentRelevant = url !== currentPageUrl && content.toLowerCase().includes(query.toLowerCase());
      if (isContentRelevant) acc.push({ url, content });

      return acc;
    }, []);

    return results;
  }, [currentLocaleIndexedData, currentPageUrl]);

  return {
    getSearchResults
  };
};

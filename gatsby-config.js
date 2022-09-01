require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const languages = require(`${__dirname}/src/locales/language.config`);

const processLangs = languages => {
  return languages.reduce((acc, lang, i, arr) => {
    const localeData = require(`${__dirname}/src/locales/${lang}`);

    const localeDataToIndex = Object.entries(localeData).reduce((acc, [key, value]) => {
      if (key.includes('_')) {
        const page = key.split('_')[0];
        const pageContent = acc[page];
        if (pageContent) {
          acc = {
            ...acc,
            [page]: [...acc[page], value]
          }
        } else {
          acc = {
            ...acc,
            [page]: [value]
          }
        }
      }

      return acc;
    }, {});

    return {
      ...acc,
      [lang]: localeDataToIndex
    };
  }, {});
};

const langGlobalContext = processLangs(languages.list);

module.exports = {
  siteMetadata: {
    title: `website`,
    siteUrl: `https://www.yourdomain.tld`,
    langGlobalContext
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "locale",
        path: `${__dirname}/src/locales/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_GA],
        gtagConfig: {
          anonymize_ip: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GOOGLE_TAG_MANAGER,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale", // name given to "gatsby-source-filesystem" plugin.
        languages: languages.list,
        defaultLanguage: languages.defaultLangKey,
        fallbackLanguage: languages.defaultLangKey,
        i18nextOptions: {
          keySeparator: false,
          nsSeparator: false
        },
      }
    },
  ],
};

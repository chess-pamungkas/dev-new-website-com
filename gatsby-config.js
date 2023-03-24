require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const languages = require(`${__dirname}/src/locales/language.config`);
const {
  processLanguagesForConfig,
} = require(`${__dirname}/src/locales/processLanguages`);

const sharedNumbers = require(`${__dirname}/src/helpers/sharedNumbers.json`);

const indexedLocaleData = processLanguagesForConfig(languages.list);
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: languages.list.id });
};

module.exports = {
  siteMetadata: {
    title: `website`,
    siteUrl: `https://www.yourdomain.tld`,
    indexedLocaleData,
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
          nsSeparator: false,

          interpolation: {
            defaultVariables: sharedNumbers,
          },
        },
      },
    },
  ],
//   headers: {
//     "/public/**/*.html": [
//       {
//         key: "Cache-Control",
//         value: "public, max-age=0, must-revalidate",
//       },
//     ],
//     "/public/page-data/*": [
//       {
//         key: "Cache-Control",
//         value: "public, max-age=0, must-revalidate",
//       },
//     ],
//     "/public/**/*.js": [
//       {
//         key: "Cache-Control",
//         value: "public, max-age=31536000, immutable",
//       },
//     ],
//     "/public/**/*.css": [
//       {
//         key: "Cache-Control",
//         value: "public, max-age=31536000, immutable",
//       },
//     ],
//   },
};

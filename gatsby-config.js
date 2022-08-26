require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('gatsby-plugin-config');
const languages = require('./src/locales/language.config');

module.exports = {
  siteMetadata: {
    title: `website`,
    siteUrl: `https://www.yourdomain.tld`,
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
        trackingIds: [config.GATSBY_GA],
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale", // name given to "gatsby-source-filesystem" plugin.
        languages: languages.list,
        defaultLanguage: languages.defaultLangKey,
        i18nextOptions: {
          keySeparator: false,
          nsSeparator: false
        },
      }
    },
  ],
};

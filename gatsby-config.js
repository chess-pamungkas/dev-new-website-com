require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const languages = require(`${__dirname}/src/locales/language.config`);
const {
  processLanguagesForConfig,
} = require(`${__dirname}/src/locales/processLanguages`);

const indexedLocaleData = processLanguagesForConfig(languages.uniqueList);
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: languages.list.id });
};

module.exports = {
  siteMetadata: {
    title: `website`,
    siteUrl: `https://www.yourdomain.tld`,
    indexedLocaleData,
  },
  // Optimize query performance
  flags: {
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
  },
  // Webpack optimizations for better code splitting and performance
  onCreateWebpackConfig: ({ actions, stage }) => {
    if (stage === "build-javascript" || stage === "develop") {
      actions.setWebpackConfig({
        optimization: {
          splitChunks: {
            chunks: "all",
            cacheGroups: {
              default: false,
              vendors: false,
              // Vendor chunk for node_modules
              vendor: {
                name: "vendor",
                chunks: "all",
                test: /[\\/]node_modules[\\/]/,
                priority: 20,
              },
              // Common chunk for shared code
              common: {
                name: "common",
                minChunks: 2,
                chunks: "all",
                priority: 10,
                reuseExistingChunk: true,
                enforce: true,
              },
              // Separate chunk for large libraries
              react: {
                name: "react",
                test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
                chunks: "all",
                priority: 30,
              },
              // Separate chunk for i18n
              i18n: {
                name: "i18n",
                test: /[\\/]node_modules[\\/](i18next|react-i18next)[\\/]/,
                chunks: "all",
                priority: 25,
              },
            },
          },
        },
        // Performance optimizations
        performance: {
          hints: "warning",
          maxEntrypointSize: 512000,
          maxAssetSize: 512000,
        },
      });
    }
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
    ...(process.env.GATSBY_GOOGLE_TAG_MANAGER
      ? [
          {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: process.env.GATSBY_GOOGLE_TAG_MANAGER,
              defaultDataLayer: { platform: "gatsby" },
            },
          },
        ]
      : []),
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale", // name given to "gatsby-source-filesystem" plugin.
        languages: languages.list,
        defaultLanguage: languages.defaultLangKey,
        fallbackLanguage: languages.defaultLangKey,
        redirect: false,
        i18nextOptions: {
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};

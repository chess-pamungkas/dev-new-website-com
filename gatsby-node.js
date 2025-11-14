const fs = require("fs-extra");
const path = require("path");

// Webpack optimizations for better code splitting and performance
exports.onCreateWebpackConfig = ({ actions, stage }) => {
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
};

// Make sure the registration script is copied to the public folder
exports.onPostBuild = async ({ reporter }) => {
  const scriptsDir = path.join(process.cwd(), "src", "scripts");
  const publicScriptsDir = path.join(process.cwd(), "public", "scripts");

  // Ensure the scripts directory exists in public
  await fs.ensureDir(publicScriptsDir);

  // Copy the registration script to the public folder
  try {
    await fs.copy(
      path.join(scriptsDir, "registration-popup-script", "index.js"),
      path.join(publicScriptsDir, "registration-popup-script.js")
    );
    reporter.info("Registration script copied to public folder");
  } catch (err) {
    reporter.error("Error copying registration script", err);
  }
};

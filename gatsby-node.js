const WebpackAssetsManifest = require("webpack-assets-manifest");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "build-javascript") {
    actions.setWebpackConfig({
      plugins: [
        new WebpackAssetsManifest({
          output: "asset-manifest.json",
          writeToDisk: true,
          customize(entry, original, manifest, asset) {
            if (entry.key.toLowerCase().endsWith(".js")) {
              manifest.set("compilationHash", asset.info.contenthash);
            }
          },
        }),
      ],
    });
  }
};

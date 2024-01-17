const md5 = require("md5");
const fs = require("fs");
const util = require("util");
const path = require("path");
const glob = require("glob");

const addVersionToAppData = async (file, versionHash) => {
  const stats = await util.promisify(fs.stat)(file);
  if (stats.isFile()) {
    let content = await util.promisify(fs.readFile)(file, "utf8");

    // Update the regular expression to match only 'app-data.json' in 'page-data' folder
    const result = content.replace(
      /page-data\/app-data\.json(\?v=[a-f0-9]{32})?/g,
      `page-data/app-data.json?v=${versionHash}`
    );

    await util.promisify(fs.writeFile)(file, result, "utf8");
  }
};

exports.onPostBootstrap = () => {
  const loaderPath = path.join(
    __dirname,
    "node_modules/gatsby/cache-dir/loader.js"
  );

  const versionHash = md5(`${new Date().getTime()}`);

  try {
    let content = fs.readFileSync(loaderPath, "utf8");

    content = content.replace(
      /page-data\/app-data\.json(\?v=[a-f0-9]{32})?/g,
      `page-data/app-data.json?v=${versionHash}`
    );

    fs.writeFileSync(loaderPath, content, "utf8");
    console.log(
      "Successfully updated loader.js with versionHash:",
      versionHash
    );
  } catch (error) {
    console.error("Error updating loader.js:", error);
  }
};

exports.onPostBuild = async () => {
  const publicPath = path.join(__dirname, "public");
  const appDataFiles = glob.sync(`${publicPath}/**/page-data/app-data.json`);

  const versionHash = md5(`${new Date().getTime()}`);

  // Note: glob.sync returns an array
  for (const file of appDataFiles) {
    await addVersionToAppData(file, versionHash);
  }
};

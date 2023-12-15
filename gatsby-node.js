const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

exports.onPostBuild = () => {
  const commitHash = execSync("git rev-parse --short HEAD").toString().trim();
  const hashContent = JSON.stringify({ hash: commitHash });
  const publicPath = path.join(__dirname, "public", "hash.json");
  fs.writeFileSync(publicPath, hashContent);
};

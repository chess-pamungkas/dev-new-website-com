const fs = require("fs");
const { execSync } = require("child_process");

exports.onPostBuild = async () => {
  const commitHash = execSync("git rev-parse --short HEAD").toString().trim();
  const hashContent = JSON.stringify({ hash: commitHash });

  fs.writeFileSync("public/hash.json", hashContent);
};

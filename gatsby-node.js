const fs = require("fs");
const { execSync } = require("child_process");

exports.onPostBuild = async () => {
  const commitHash = execSync("git rev-parse --short HEAD").toString().trim();

  fs.writeFileSync("public/hash.json", `"${commitHash}"`);
};

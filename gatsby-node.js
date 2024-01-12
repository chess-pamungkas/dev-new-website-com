const fs = require("fs");
const path = require("path");

exports.onPostBuild = () => {
  const version = Date.now().toString();
  const filePath = path.join(__dirname, "public", "version.json");
  fs.writeFileSync(filePath, JSON.stringify({ version }));
};

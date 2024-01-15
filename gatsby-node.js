const fs = require("fs");
const path = require("path");

exports.onPostBuild = () => {
  const version = new Date().toISOString();
  console.log("Generating new version:", version); // Debugging log

  const filePath = path.join(__dirname, "public", "version.json");
  fs.writeFileSync(filePath, JSON.stringify({ version }));

  console.log("Written version to:", filePath); // Debugging log
};

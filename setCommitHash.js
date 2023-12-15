const fs = require("fs");
const { execSync } = require("child_process");

const commitHash = execSync("git rev-parse --short HEAD").toString().trim();
const envContent = `GATSBY_COMMIT_HASH=${commitHash}\n`;

fs.appendFileSync(".env", envContent);

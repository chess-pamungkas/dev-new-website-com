const fs = require("fs");
const { execSync } = require("child_process");

function getGitCommitHash() {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch (error) {
    console.error("Error fetching git commit hash:", error);
    return "";
  }
}

function updateEnvFile(commitHash, envFilePath) {
  if (!fs.existsSync(envFilePath)) {
    console.warn(`File not found: ${envFilePath}`);
    return;
  }

  let envContent = fs.readFileSync(envFilePath, "utf8");
  const commitHashLine = `GATSBY_COMMIT_HASH=${commitHash}`;

  if (envContent.includes("GATSBY_COMMIT_HASH")) {
    envContent = envContent.replace(
      /GATSBY_COMMIT_HASH=.*\n/,
      `${commitHashLine}\n`
    );
  } else {
    envContent += `${commitHashLine}\n`;
  }

  fs.writeFileSync(envFilePath, envContent);
}

const commitHash = getGitCommitHash();
const envFilePaths = [
  "./.env_staging_com",
  "./.env_staging_eu",
  "./.env_dev_eu",
  "./.env_dev_com",
  "./.env_prod_com_lp",
  "./.env_prod_eu_lp",
  "./.env_prod_com",
  "./.env_prod_eu",
  "./.env.development",
  "./.env.production",
];

if (commitHash) {
  envFilePaths.forEach((envFilePath) => updateEnvFile(commitHash, envFilePath));
} else {
  console.error("Git commit hash could not be retrieved.");
}

const fs = require("fs-extra");
const path = require("path");

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

    // Add an RTL initialization marker to help debug
    reporter.info(
      "RTL fixes for Arabic language have been included in this build"
    );
    reporter.info(
      "Check arabic/RTL paths to ensure proper attributes are applied"
    );

    // Create a build info file to track when these changes were deployed
    const buildInfoPath = path.join(process.cwd(), "public", "build-info.json");
    const buildInfo = {
      buildTime: new Date().toISOString(),
      rtlFixesIncluded: true,
      rtlFixesVersion: "1.0.0",
    };

    await fs.writeJSON(buildInfoPath, buildInfo, { spaces: 2 });
    reporter.info("Build info with RTL fixes tracking created");
  } catch (err) {
    reporter.error("Error copying registration script", err);
  }
};

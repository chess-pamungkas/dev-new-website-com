#!/usr/bin/env node

/**
 * This script copies the registration popup script to the static folder
 * so it can be accessed during development.
 * It also creates a minified version of the script.
 *
 * Environment variables used by the script:
 * - IFRAME_REGISTRATION_API_KEY - Variable used for API key authentication
 */

const fs = require("fs-extra");
const path = require("path");
const { minify } = require("terser");

const scriptsDir = path.join(process.cwd(), "src", "scripts");
const staticScriptsDir = path.join(process.cwd(), "static", "scripts");
const sourceScriptPath = path.join(
  scriptsDir,
  "registration-popup-script",
  "index.js"
);
const regularOutputPath = path.join(
  staticScriptsDir,
  "registration-popup-script.js"
);
const minifiedOutputPath = path.join(
  staticScriptsDir,
  "registration-popup-script.min.js"
);

// Ensure the scripts directory exists in static
fs.ensureDirSync(staticScriptsDir);

async function processScripts() {
  try {
    // Copy the unminified registration script
    fs.copySync(sourceScriptPath, regularOutputPath);
    console.log("✓ Registration script copied to static folder");

    // Read the source file for minification
    const sourceCode = fs.readFileSync(sourceScriptPath, "utf8");

    // Minify the code
    console.log("Minifying registration script...");
    const minifyOptions = {
      compress: {
        drop_console: false, // Keep console logs for debugging
        drop_debugger: true,
      },
      mangle: true,
      output: {
        comments: /^!|@license|@author|copyright/i, // Preserve important comments
      },
    };

    const minified = await minify(sourceCode, minifyOptions);

    if (minified.error) {
      throw new Error(`Minification failed: ${minified.error}`);
    }

    // Write the minified file
    fs.writeFileSync(minifiedOutputPath, minified.code);
    console.log("✓ Minified registration script created");

    // Calculate size reduction
    const originalSize = fs.statSync(regularOutputPath).size;
    const minifiedSize = fs.statSync(minifiedOutputPath).size;
    const reduction = (
      ((originalSize - minifiedSize) / originalSize) *
      100
    ).toFixed(2);

    console.log("\nSize comparison:");
    console.log(` - Original: ${formatBytes(originalSize)}`);
    console.log(` - Minified: ${formatBytes(minifiedSize)}`);
    console.log(` - Reduction: ${reduction}%`);

    console.log("\nScripts are now available at:");
    console.log(` - Regular:  /scripts/registration-popup-script.js`);
    console.log(` - Minified: /scripts/registration-popup-script.min.js`);

    // Log environment variable usage information
    console.log("\nEnvironment variables used by the script:");
    console.log(
      " - IFRAME_REGISTRATION_API_KEY: " +
        (process.env.IFRAME_REGISTRATION_API_KEY || "(not set)")
    );
  } catch (err) {
    console.error("Error processing registration script:", err);
    process.exit(1);
  }
}

// Helper function to format bytes
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

// Run the script
processScripts();

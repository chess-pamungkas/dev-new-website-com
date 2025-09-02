#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// List of SVG files that are imported in the code
const requiredSvgFiles = [
  "src/assets/images/icons/main-page/testimonials/uae.svg",
  "src/assets/images/icons/main-page/testimonials/mexico.svg",
  "src/assets/images/icons/main-page/testimonials/south-africa.svg",
  "src/assets/images/icons/main-page/testimonials/testimonials.svg",
  "src/assets/images/mt5/mt5.svg",
  "src/assets/images/icons/badge-security.svg",
  "src/assets/images/icons/circle-mark.svg",
  "src/assets/images/swap-free/swap-free-freedom.svg",
  "src/assets/images/icon--white.svg",
];

console.log("🔍 Checking for required SVG files...\n");

let allFilesExist = true;

requiredSvgFiles.forEach((filePath) => {
  const fullPath = path.resolve(filePath);

  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${filePath}`);
  } else {
    console.log(`❌ ${filePath} - MISSING!`);
    allFilesExist = false;
  }
});

console.log("");

if (allFilesExist) {
  console.log("🎉 All required SVG files are present!");
  process.exit(0);
} else {
  console.log(
    "💥 Some SVG files are missing. Please check the file paths and ensure all files exist."
  );
  process.exit(1);
}

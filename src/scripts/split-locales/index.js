let locales = require("../../locales/en/index.json");
let fs = require("fs");

let onlyFsaKeys = [];
let fsaLocales = {};
let cysecLocales = {};

// Find only FSA specific keys and write the rest to cysecLocales
Object.keys(locales).forEach((key) => {
  if (key.endsWith("-fsa")) {
    onlyFsaKeys.push(key);
  } else {
    cysecLocales[key] = locales[key];
  }
});

// Exclude duplicates and write fsaLocales
Object.keys(locales).forEach((key) => {
  if (!onlyFsaKeys.includes(key + "-fsa")) {
    fsaLocales[key] = locales[key];
  }
});

fs.writeFile(
  "src/scripts/split-locales/splitted-locales/fsa-locales.json",
  JSON.stringify(fsaLocales, null, "\t"),
  (e) => {
    console.log(e);
  }
);
fs.writeFile(
  "src/scripts/split-locales/splitted-locales/cysec-locales.json",
  JSON.stringify(cysecLocales, null, "\t"),
  (e) => {
    console.log(e);
  }
);

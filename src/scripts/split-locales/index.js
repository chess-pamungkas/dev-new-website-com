let locales = require("../../locales/en/index.json");
let fs = require("fs");

let fsaLocales = {};
let cysecLocales = {};

Object.keys(locales).forEach((key) => {
  if (key.endsWith("-fsa")) {
    fsaLocales[key] = locales[key];
  } else {
    cysecLocales[key] = locales[key];
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

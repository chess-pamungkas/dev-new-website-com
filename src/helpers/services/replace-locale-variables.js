import sharedNumbers from "../sharedNumbers.json";

export const replaceLocaleVariables = (text) => {
  const pattern = /{{\s*([\w\s-]+)\s*}}/g;
  const matches = text.match(pattern);
  let toReplace = {};

  if (matches) {
    for (const match of matches) {
      const key = match.replace(/{{\s*([\w\s-]+)\s*}}/, "$1").trim();
      toReplace[match] = sharedNumbers[key];
    }
  }

  for (const [key, value] of Object.entries(toReplace)) {
    text = text.replaceAll(key, value);
  }
  return text;
};

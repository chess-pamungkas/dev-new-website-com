export const replaceLocaleVariables = (text, variables) => {
  const pattern = /{{\s*([\w\s-]+)\s*}}/g;
  const matches = text.match(pattern);
  let toReplace = {};

  if (matches) {
    for (const match of matches) {
      const key = match.replace(/{{\s*([\w\s-]+)\s*}}/, "$1").trim();
      toReplace[match] = variables[key];
    }
  }

  for (const [key, value] of Object.entries(toReplace)) {
    text = text.replaceAll(key, value);
  }
  return text;
};

export const getVersion = async () => {
  const timestamp = Date.now();
  const response = await fetch(`/hash.json?${timestamp}`);
  const json = await response.json();

  if (!response.ok) throw new Error("LocalError", { cause: json });
  return json;
};

export const versionService = { getVersion };

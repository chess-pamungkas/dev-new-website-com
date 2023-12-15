export const getVersion = async () => {
  const response = await fetch(`/hash.json?${Date.now()}`);
  if (!response.ok) {
    throw new Error("Failed to fetch server hash");
  }
  const text = await response.text();
  return text.trim(); // Should return the hash as a plain string, e.g., 5f98680a
};
export const versionService = { getVersion };

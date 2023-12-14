const versionService = {
  getVersion: async () => {
    const timestamp = Date.now();
    const response = await fetch(`/hash.json?${timestamp}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
};

export { versionService };

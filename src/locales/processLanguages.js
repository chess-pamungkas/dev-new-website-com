module.exports.processLanguagesForConfig = (languages) => {
  return languages.reduce((acc, lang) => {
    const localeData = require(`${__dirname}/${lang}`);
    const localeDataArr = Object.entries(localeData);
    const indexedLocaleDataArr = localeDataArr.length
      ? Object.entries(localeData).reduce((acc, [key, value], i, arr) => {
          if (key.includes("_")) {
            const page = key.split("_")[0];
            const formatedValue = `${
              page === "index" ? "/" : "/" + page + "/"
            }_${value}`;
            acc.push(formatedValue);
          }

          if (i === arr.length - 1 && acc.length === 0) acc.push("empty");

          return acc;
        }, [])
      : ["empty"];

    return {
      ...acc,
      [lang]: indexedLocaleDataArr,
    };
  }, {});
};

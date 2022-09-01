const JsSearch = require('js-search');
const en = require(`${__dirname}/src/locales/en`);
// const en = JSON.parse(enJSON);

console.log(en['page-shares-title']);
// defines an indexing strategy for the small dataset
const dataToSearch = new JsSearch.PrefixIndexStrategy();

// defines the sanitizer for the search to prevent some of the words from being excluded
dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();

// defines the search index
dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("index");






// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

// };

// exports.onCreateNode = ({ node, actions, getNode}) => {
//   const { createNodeField } = actions;

//   const mySpecialContext = "blah";
//   createNodeField({ node, name: "myglobal", value: mySpecialContext });
// };

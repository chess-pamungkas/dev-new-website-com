import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          langGlobalContext {
            en {
              index
            }
          }
        }
      }
    }
  `)
  return data.site.siteMetadata;
};

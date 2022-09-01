import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          langGlobalContext {
            en
            de
            fr
            pl
            pt
            da
            fi
            es
            ru
            ar
            nl
            sw
            ro
            it
            cn
            tw
            no
            cz
            vn
            th
            my
            id
            kr
            jp
            in
            bd
            gr
            ph        
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};

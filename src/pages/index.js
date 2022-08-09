import * as React from "react";
import "../assets/styles/index.scss";
import MainPromotion from "../components/main-promotion";

const IndexPage = () => {
  return (
    <main>
      <MainPromotion />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Oqtima trading page</title>;

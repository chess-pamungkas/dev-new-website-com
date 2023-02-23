import React, { useEffect, useState } from "react";

const Mt4WebTraderLink = () => {
  const [htmlFileString, setHtmlFileString] = useState();
  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`mt4-webtrader.html`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
};

export default Mt4WebTraderLink;

import * as React from "react"
import "../assets/styles/index.scss";
import LivePricesWidget from '../widgets/live-prices-widget';

const IndexPage = () => {
  return (
    <main>
      <h1>
        Hello
      </h1>
      <LivePricesWidget />
    </main>
  )
}

export default IndexPage;

export const Head = () => <title>Home Page</title>

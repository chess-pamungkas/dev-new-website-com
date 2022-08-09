import * as React from "react"
import Header from "../components/header/header"
import "../assets/styles/index.scss";

const IndexPage = () => {
  return (
    <main>
      <Header></Header>
      <h1>
        Hello
      </h1>
    </main>
  )
}

export default IndexPage;

export const Head = () => <title>Home Page</title>

import React, { cloneElement, createElement } from "react";
import Layout from "./src/components/shared/layout";

export const wrapRootElement = ({ element }) => {
  // We have to do it if we want to use localization plugin for Layout content
  // const newElement = cloneElement(
  //   element,
  //   element.props,
  //   cloneElement(
  //     element.props.children,
  //     element.props.children.props,
  //     createElement(Layout, undefined, element.props.children.props.children)
  //   )
  // );
  // return newElement;

  return <Layout>{element}</Layout>
};

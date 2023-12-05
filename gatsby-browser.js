import { cloneElement, createElement } from "react";
import Layout from "./src/components/shared/layout";
import { isCySEC } from "./src/helpers/entity-resolver";
export const wrapPageElement = ({ element }) => {
  // Don't remove the if statement, it will break everything!!!
  // Workaround to apply localization to layout content, plugin doesn't do this by default
  if (Object.keys(element.props).length !== 0) {
    const newElement = cloneElement(
      element,
      element.props,
      cloneElement(
        element.props.children,
        element.props.children.props,
        createElement(Layout, undefined, element.props.children.props.children)
      )
    );
    return newElement;
  }

  return element;
};

export const onClientEntry = async () => {
  if (isCySEC() && process.env.NODE_ENV === "production") {
    try {
      const response = await fetch("/asset-manifest.json");
      const manifest = await response.json();
      const currentHash = manifest.compilationHash;

      const storedHash = window.localStorage.getItem(
        "gatsby-reload-compilation-hash"
      );
      if (storedHash !== currentHash) {
        window.localStorage.setItem(
          "gatsby-reload-compilation-hash",
          currentHash
        );
        window.location.reload();
      }
    } catch (error) {
      console.error("Error fetching asset manifest:", error);
    }
  }
};

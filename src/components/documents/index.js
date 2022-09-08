import React from "react";
import cn from "classnames";
import Document from "../shared/document";
import { stringTransformToKebabCase } from "../../helpers/services/string-service";

const Documents = ({ className, title, text, documents }) => {
  return (
    <section className={cn("documents", className)} id="legalDocuments">
      <div className="documents__wrapper">
        <h2 className="documents__title">{title}</h2>
        <p className="documents__text">{text}</p>
        <div className="documents__files">
          {documents.length > 0 &&
            documents.map((doc) => (
              <Document
                key={stringTransformToKebabCase(doc.name)}
                document={doc}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;

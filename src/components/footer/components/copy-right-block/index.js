import React from "react";
import cn from "classnames";
import {
  getFooterCompanyName,
  getFooterCopyright,
} from "../../../../helpers/footer.config";

const CopyRightBlock = ({ className }) => {
  return (
    <>
      <section className={cn("copy-right-block", className)}>
        <div className="copy-right-block__text">{getFooterCopyright()}</div>
      </section>
      <section className={cn("copy-right-block-company", className)}>
        <div className="copy-right-block-company__text">
          {getFooterCompanyName()}
        </div>
      </section>
    </>
  );
};

export default CopyRightBlock;

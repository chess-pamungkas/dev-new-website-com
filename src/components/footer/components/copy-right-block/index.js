import React from "react";
import cn from "classnames";
import { getFooterCopyright } from "../../../../helpers/footer.config";

const CopyRightBlock = ({ className }) => {
  return (
    <section className={cn("copy-right-block", className)}>
      <div className="copy-right-block__text">{getFooterCopyright()}</div>
    </section>
  );
};

export default CopyRightBlock;

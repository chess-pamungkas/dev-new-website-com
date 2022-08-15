import React from "react";
import cn from "classnames";
import { COPYRIGHT_TEXT } from "../../../../helpers/footer.config";

const CopyRightBlock = ({ className }) => {
  return (
    <section className={cn("copy-right-block", className)}>
      <div className="copy-right-block__text">{COPYRIGHT_TEXT}</div>
    </section>
  );
};

export default CopyRightBlock;

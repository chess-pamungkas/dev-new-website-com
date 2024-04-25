import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
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

CopyRightBlock.propTypes = {
  className: PropTypes.string,
};

export default CopyRightBlock;

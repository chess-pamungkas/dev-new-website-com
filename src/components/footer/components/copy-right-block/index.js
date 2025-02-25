import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import {
  getFooterCompanyName,
  getFooterCopyright,
} from "../../../../helpers/footer.config";
import "../../../../assets/styles/container.scss";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";

const CopyRightBlock = ({ className }) => {
  const { isTablet, isMobile } = useWindowSize();

  return (
    <>
      <section className={cn("copy-right-block", className)}>
        <div className="container">
          <div className="copy-right-block__text">{getFooterCopyright()}</div>
        </div>
      </section>
      <section className={cn("copy-right-block-company", className)}>
        <div className="container">
          <div className="copy-right-block-company__text">
            {getFooterCompanyName()}
          </div>
        </div>
      </section>
    </>
  );
};

CopyRightBlock.propTypes = {
  className: PropTypes.string,
};

export default CopyRightBlock;

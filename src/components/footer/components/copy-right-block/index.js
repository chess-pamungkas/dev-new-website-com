import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { FOOTER_COPYRIGHT } from "../../../../helpers/footer.config";

const CopyRightContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t(FOOTER_COPYRIGHT.p1)}</p>
      <p>{t(FOOTER_COPYRIGHT.p2)}</p>
    </>
  );
};

const CopyRightBlock = ({ className }) => {
  return (
    <section className={cn("copy-right-block", className)}>
      <div className="copy-right-block__text">
        <CopyRightContent />
      </div>
    </section>
  );
};

export default CopyRightBlock;

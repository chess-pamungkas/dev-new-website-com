import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import image from "../../../assets/images/system-info/404.svg";
import SystemInfoComponent from "../../shared/system-info";

const NotFoundContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <SystemInfoComponent
        image={image}
        title={t("system-page-404-title")}
        subTitle={t("system-page-404-subtitle")}
        goBackBtnTitle={t("system-page-go-back-btn")}
      />
    </>
  );
};

export default NotFoundContent;

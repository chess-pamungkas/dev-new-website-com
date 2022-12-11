import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { AlphaGeneration2 } from "../../../shared/icons";
import Tabs from "../../../shared/tabs";
//TODO replace with the real ones
import alpha1 from "../../../../assets/images/trading-tools/alpha22.png";
import alpha21 from "../../../../assets/images/trading-tools/alpha22.png";
import alpha22 from "../../../../assets/images/trading-tools/alpha22.png";
import alpha3 from "../../../../assets/images/trading-tools/alpha22.png";

const AlphaGenerationTabs = () => {
  const { t } = useTranslation();

  const TabContent = ({ img1, img2, title, children }) => (
    <div className="tab-content">
      <div className="tab-content__image-wrapper">
        <img src={img1} alt={title} className="tab-content__image" />
        {img2 && <img src={img2} alt={title} className="tab-content__image" />}
      </div>
      <div className="tab-content__text-wrapper">
        <h3 className="tab-content__title">{title}</h3>
        <div className="tab-content__text">{children}</div>
      </div>
    </div>
  );

  const tabs = [
    {
      id: 1,
      title: t("trading-tools_alpha-generation_tabs_title1"),
      isTitleWithIcon: true,
      icon: <AlphaGeneration2 className="alpha-generation-tabs__icon" />,
      content: (
        <TabContent
          img1={alpha1}
          title={t("trading-tools_alpha-generation_tabs_content1_title")}
        >
          <p>{t("trading-tools_alpha-generation_tabs_content1_text")}</p>
        </TabContent>
      ),
    },
    {
      id: 2,
      title: t("trading-tools_alpha-generation_tabs_title2"),
      isTitleWithIcon: true,
      icon: <AlphaGeneration2 className="alpha-generation-tabs__icon" />,
      content: (
        <TabContent
          img1={alpha21}
          img2={alpha22}
          title={t("trading-tools_alpha-generation_tabs_content1_title")}
        >
          <p>{t("trading-tools_alpha-generation_tabs_content2_text1")}</p>
          <p>
            <span className="bold">
              {t("trading-tools_alpha-generation_tabs_content2_text2-bold")}
              &nbsp;
            </span>
            <span>
              {t("trading-tools_alpha-generation_tabs_content2_text2")}
            </span>
          </p>
          <p>
            <span className="bold">
              {t("trading-tools_alpha-generation_tabs_content2_text3-bold")}
              &nbsp;
            </span>
            <span>
              {t("trading-tools_alpha-generation_tabs_content2_text3")}
            </span>
          </p>
        </TabContent>
      ),
    },
    {
      id: 3,
      title: t("trading-tools_alpha-generation_tabs_title3"),
      isTitleWithIcon: true,
      icon: <AlphaGeneration2 className="alpha-generation-tabs__icon" />,
      content: (
        <TabContent
          img1={alpha3}
          title={t("trading-tools_alpha-generation_tabs_content3_title")}
        >
          <p>{t("trading-tools_alpha-generation_tabs_content3_text1")}</p>
          <p>
            <span className="display-block">
              {t("trading-tools_alpha-generation_tabs_content3_text2")}
            </span>
            <span className="display-block">
              {t("trading-tools_alpha-generation_tabs_content3_text3")}
            </span>
            <span className="display-block">
              {t("trading-tools_alpha-generation_tabs_content3_text4")}
            </span>
            <span className="display-block">
              {t("trading-tools_alpha-generation_tabs_content3_text5")}
            </span>
          </p>
        </TabContent>
      ),
    },
  ];

  return (
    <div className="alpha-generation-tabs__wrapper">
      <Tabs tabList={tabs} classname="alpha-generation-tabs" />
    </div>
  );
};

export default AlphaGenerationTabs;

import React, { useState, useContext, useEffect, useRef, useMemo } from "react";
import { Formik } from "formik";
import cn from "classnames";
import { PopupRegistrationSchema } from "../../../../../validations/popup-registration";
import axios from "axios";
import { Trans } from "react-i18next";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useTranslationWithVariables } from "../../../../../helpers/hooks/use-translation-with-vars";
import { sendLog } from "../../../../../helpers/services/log-service";
import countries from "../../../../shared/countries";
import ClientResolverContext from "../../../../../context/client-resolver-context";
import { PORTAL_LANGUAGES_MAP } from "../../../../../helpers/lang-options.config";
import LanguageContext from "../../../../../context/language-context";
import arrowDownIcon from "../../../../../assets/images/icons/arrow-down.png";

const CodeDropdown = ({
  searchCode,
  setSearchCode,
  selectedCountryCode,
  handleCodeSelect,
  t,
  codeOptionsRef,
  setIsCodeOpen,
}) => {
  const filteredCodes = useMemo(() => {
    if (!searchCode) return countries;
    const searchTerm = searchCode.toLowerCase().trim();

    if (/^[+\d]/.test(searchTerm)) {
      return countries.filter((country) =>
        country.code.replace("+", "").startsWith(searchTerm.replace("+", ""))
      );
    }
    return countries.filter((country) =>
      country.name.toLowerCase().startsWith(searchTerm)
    );
  }, [searchCode]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredCodes.length > 0) {
      e.preventDefault();
      handleCodeSelect(filteredCodes[0].code);
      setSearchCode("");
      setIsCodeOpen(false);
    }
  };

  return (
    <div className="custom-dropdown__content">
      <input
        type="text"
        className="custom-dropdown__search"
        placeholder={t("popup-registration-search")}
        value={searchCode}
        onChange={(e) => setSearchCode(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <div className="custom-dropdown__options" ref={codeOptionsRef}>
        {filteredCodes.map((country, index) => (
          <div
            key={`${country.code}-${index}`}
            className={`custom-dropdown__option ${
              selectedCountryCode === country.code
                ? "custom-dropdown__option--selected"
                : ""
            } ${index === 0 ? "custom-dropdown__option--active" : ""}`}
            onClick={() => {
              handleCodeSelect(country.code);
              setSearchCode("");
              setIsCodeOpen(false);
            }}
          >
            {`${country.name} ${country.code}`}
          </div>
        ))}
      </div>
    </div>
  );
};

const CountryDropdown = ({
  searchCountry,
  setSearchCountry,
  selectedCountry,
  handleCountrySelect,
  t,
  countryOptionsRef,
  filteredCountries,
  setFieldValue,
  setIsCountryOpen,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredCountries.length > 0) {
      e.preventDefault();
      handleCountrySelect(filteredCountries[0].name);
      setSearchCountry("");
      setIsCountryOpen(false);
    }
  };

  return (
    <div className="custom-dropdown__content">
      <input
        type="text"
        className="custom-dropdown__search"
        placeholder={t("popup-registration-search")}
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <div className="custom-dropdown__options" ref={countryOptionsRef}>
        {filteredCountries.map((country, index) => (
          <div
            key={country.name}
            className={`custom-dropdown__option ${
              selectedCountry === country.name
                ? "custom-dropdown__option--selected"
                : ""
            } ${index === 0 ? "custom-dropdown__option--active" : ""}`}
            onClick={() => {
              handleCountrySelect(country.name);
              setSearchCountry("");
              setIsCountryOpen(false);
            }}
          >
            {country.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const PopupRegistrationForm = ({ params }) => {
  const { t } = useTranslationWithVariables();
  const countryOptionsRef = useRef(null);
  const codeOptionsRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSentSuccessful, setIsSentSuccessful] = useState(null);
  const API_URL = process.env.GATSBY_OQTIMA_API_URL;

  const { executeRecaptcha } = useGoogleReCaptcha();
  const { clientConfig } = useContext(ClientResolverContext);
  const { selectedLanguage } = useContext(LanguageContext);
  const languageCode = PORTAL_LANGUAGES_MAP[selectedLanguage.id];
  const referral_type = params.referral_type;
  const referral_value = params.referral_value;

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchCode, setSearchCode] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isCodeOpen, setIsCodeOpen] = useState(false);
  const [policyLinks, setPolicyLinks] = useState({
    privacyPolicy: "",
    cookiePolicy: "",
  });

  useEffect(() => {
    const fetchPolicyLinks = async () => {
      try {
        const response = await axios.get(`${API_URL}crm-register/policy-links`);
        const { privacy_policy, cookie_policy } = response.data;

        const privacyLink =
          privacy_policy.find((p) => p.language === languageCode)?.oss_url ||
          privacy_policy.find((p) => p.language === "en")?.oss_url;

        const cookieLink =
          cookie_policy.find((c) => c.language === languageCode)?.oss_url ||
          cookie_policy.find((c) => c.language === "en")?.oss_url;

        console.log("privacyLink", privacyLink);
        console.log("cookieLink", cookieLink);
        setPolicyLinks({
          privacyPolicy: privacyLink,
          cookiePolicy: cookieLink,
        });
      } catch (error) {
        console.error("Error fetching policy links:", error);
        sendLog({ message: error.message, type: error.name });
      }
    };

    fetchPolicyLinks();
  }, [languageCode]);

  const filteredCountries = useMemo(() => {
    if (!searchCountry) return countries;
    const searchTerm = searchCountry.toLowerCase();
    return countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
  }, [searchCountry]);

  const handleApiResponse = (isSuccessful, message = "") => {
    setIsSentSuccessful(isSuccessful);
    setErrorMessage(message);
  };

  const handleRegistrationtForm = async (values) => {
    const token = await executeRecaptcha("popup_registration");
    const referralTypeValue = referral_type || referral_value;

    try {
      const response = await axios.post(`${API_URL}crm-register`, {
        ...values,
        token,
        language: languageCode,
        redirect: "register",
        register_ip: clientConfig.ipAddress,
        agreement: true,
        privacy: policyLinks.privacyPolicy,
        cookie: policyLinks.cookiePolicy,
        ...(referralTypeValue ? { referral_type, referral_value } : {}),
      });

      console.log("API Response:", response.data);

      if (response.data.code && response.data.code !== 200) {
        handleApiResponse(false, response.data.message);
      } else {
        handleApiResponse(true);

        const redirectAddress = response.data.redirect_address;
        if (redirectAddress) {
          window.location.href = redirectAddress;
        }
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      console.log("Error Response:", error.response);
      console.log("Error Message:", errorMessage);
      sendLog({ message: error.message, type: error.name });
      handleApiResponse(false, errorMessage);
    }
  };

  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        country: "",
        country_code: "",
        mobile: "",
        is_subscribe: 1,
        agreement: 0,
      }}
      validationSchema={PopupRegistrationSchema}
      onSubmit={handleRegistrationtForm}
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => {
        const handleCountrySelect = (countryName) => {
          setSelectedCountry(countryName);
          const matchingCountry = countries.find((c) => c.name === countryName);
          if (matchingCountry?.code) {
            setSelectedCountryCode(matchingCountry.code);
            setFieldValue("country_code", matchingCountry.code);
          }
          setFieldValue("country", countryName);
          setIsCountryOpen(false);
          setSearchCountry("");
        };

        const handleCodeSelect = (code) => {
          setSelectedCountryCode(code);
          const matchingCountry = countries.find((c) => c.code === code);
          if (matchingCountry?.name) {
            setSelectedCountry(matchingCountry.name);
            setFieldValue("country", matchingCountry.name);
          }
          setFieldValue("country_code", code);
          setIsCodeOpen(false);
          setSearchCode("");
        };

        return (
          <form onSubmit={handleSubmit} className="popup-registration__form">
            {/* Name Fields */}
            <div className="name-fields">
              <div className="popup-registration__field">
                <label className="popup-registration__label">
                  {t("popup-registration-firstName")} *
                </label>
                <input
                  type="text"
                  name="first_name"
                  placeholder={t("popup-registration-firstName") + " *"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                  className="popup-registration__input"
                  required
                />
              </div>
              <div className="popup-registration__field">
                <label className="popup-registration__label">
                  {t("popup-registration-lastName")} *
                </label>
                <input
                  type="text"
                  name="last_name"
                  placeholder={t("popup-registration-lastName") + " *"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                  className="popup-registration__input"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="popup-registration__row">
              <div className="popup-registration__field">
                <label className="popup-registration__label">
                  {t("popup-registration-email")} *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={t("popup-registration-email") + " *"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="popup-registration__input"
                  required
                />
              </div>
            </div>

            {/* Country, Code, Phone Fields */}
            <div className="popup-registration__row">
              <div className="three-fields-container">
                {/* Country Field */}
                <div className="popup-registration__field country-field">
                  <label className="popup-registration__label">
                    {t("popup-registration-countryOfResidence")} *
                  </label>
                  <div className="custom-dropdown">
                    <div
                      className={`custom-dropdown__selected ${
                        selectedCountry
                          ? "custom-dropdown__selected--has-value"
                          : ""
                      } ${
                        isCountryOpen ? "custom-dropdown__selected--open" : ""
                      }`}
                      onClick={() => setIsCountryOpen(!isCountryOpen)}
                    >
                      {selectedCountry || (
                        <span className="custom-dropdown__placeholder">
                          {t("popup-registration-countryOfResidence") + " *"}
                        </span>
                      )}
                      <img
                        src={arrowDownIcon}
                        alt="dropdown"
                        className="custom-dropdown__arrow"
                      />
                    </div>
                    {isCountryOpen && (
                      <CountryDropdown
                        searchCountry={searchCountry}
                        setSearchCountry={setSearchCountry}
                        selectedCountry={selectedCountry}
                        handleCountrySelect={handleCountrySelect}
                        t={t}
                        countryOptionsRef={countryOptionsRef}
                        filteredCountries={filteredCountries}
                        setFieldValue={setFieldValue}
                        setIsCountryOpen={setIsCountryOpen}
                      />
                    )}
                  </div>
                </div>

                {/* Mobile wrapper for Code and Phone */}
                <div className="mobile-code-phone">
                  {/* Code Field */}
                  <div className="popup-registration__field code-field">
                    <label className="popup-registration__label">
                      {t("popup-registration-countryCode")} *
                    </label>
                    <div className="custom-dropdown">
                      <div
                        className={`custom-dropdown__selected ${
                          selectedCountryCode
                            ? "custom-dropdown__selected--has-value"
                            : ""
                        } ${
                          isCodeOpen ? "custom-dropdown__selected--open" : ""
                        }`}
                        onClick={() => setIsCodeOpen(!isCodeOpen)}
                      >
                        {selectedCountryCode || (
                          <span className="custom-dropdown__placeholder">
                            {t("popup-registration-countryCode") + " *"}
                          </span>
                        )}
                        <img
                          src={arrowDownIcon}
                          alt="dropdown"
                          className="custom-dropdown__arrow"
                        />
                      </div>
                      {isCodeOpen && (
                        <CodeDropdown
                          searchCode={searchCode}
                          setSearchCode={setSearchCode}
                          selectedCountryCode={selectedCountryCode}
                          handleCodeSelect={handleCodeSelect}
                          t={t}
                          codeOptionsRef={codeOptionsRef}
                          setIsCodeOpen={setIsCodeOpen}
                        />
                      )}
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="popup-registration__field phone-field">
                    <label className="popup-registration__label">
                      {t("popup-registration-phoneNumber")} *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder={t("popup-registration-phoneNumber") + " *"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mobile}
                      className="popup-registration__input"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="popup-registration__newsletter">
              <input
                type="checkbox"
                name="is_subscribe"
                checked={values.is_subscribe}
                onChange={(e) =>
                  setFieldValue("is_subscribe", e.target.checked ? 1 : 0)
                }
              />
              {t("popup-registration-acceptMarketing")}
            </div>

            {/* Consent */}
            <div className="popup-registration__consent">
              <span className="popup-registration__consent-text">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={values.agreement}
                  onChange={(e) =>
                    setFieldValue("agreement", e.target.checked ? 1 : 0)
                  }
                />
                <span>
                  <Trans i18nKey="popup-registration-consent" ns="index">
                    I agree to allow the company to process my personal data to
                    meet its regulatory obligations and I have read and
                    understood the
                    <a
                      href={policyLinks.privacyPolicy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Privacy Policy
                    </a>
                    and
                    <a
                      href={policyLinks.cookiePolicy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Cookie Policy
                    </a>
                    of the Company.
                  </Trans>
                </span>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={cn("continue-button", {
                "button-link--disabled":
                  Object.values(errors).length > 0 ||
                  Object.values(touched).length === 0,
              })}
            >
              {t("popup-registration-continue")}
            </button>

            {/* Error Message */}
            {errorMessage && (
              <p
                className="popup-registration-error-message"
                style={{ color: "red" }}
              >
                {errorMessage}
              </p>
            )}
          </form>
        );
      }}
    </Formik>
  );
};

export default PopupRegistrationForm;

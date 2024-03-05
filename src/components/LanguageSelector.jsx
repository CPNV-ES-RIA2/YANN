import i18n from "i18next";

const lngs = {
  en: { nativeName: "EN" },
  fr: { nativeName: "FR" },
  de: { nativeName: "DE" },
};

function LanguageSelector() {
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="languageSelector">
      <select onChange={changeLanguage}>
        {Object.keys(lngs).map((lng) => (
          <option key={lng} value={lngs[lng].nativeName}>
            {lngs[lng].nativeName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;

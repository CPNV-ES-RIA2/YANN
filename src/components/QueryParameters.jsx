import { useTranslation } from "react-i18next";

function QueryParameters() {
  const { t } = useTranslation();

  return (
    <>
      <label data-testid="label-maxLabels">{t("home.maxLabels")}</label>
      <input
        type="number"
        placeholder="Default value : 5"
        min={0}
        defaultValue={5}
      />
      <label>{t("home.minConfidence")}</label>
      <input
        type="number"
        placeholder="Default value : 90"
        max={100}
        min={0}
        defaultValue={90}
      />
      <button>{t("home.analyze")}</button>
    </>
  );
}

export default QueryParameters;

import { useTranslation } from "react-i18next";

function ResultsTable() {
  const { t } = useTranslation();

  return (
    <table>
      <thead>
        <tr>
          <th>{t("results.label")}</th>
          <th>{t("results.value")}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Label 1</td>
          <td>Value 1</td>
        </tr>
        <tr>
          <td>Label 2</td>
          <td>Value 2</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultsTable;

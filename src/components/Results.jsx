import { useTranslation } from "react-i18next";

function ResultsTable({ labels }) {
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
        {labels?.map((label) => (
          <tr key={label.name} className="article">
            <td>{label.name}</td>
            <td>{label.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsTable;

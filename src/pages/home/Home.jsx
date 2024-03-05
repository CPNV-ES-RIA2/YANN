import { useTranslation } from "react-i18next";
import DragAndDrop from "../../components/Dragger";
import LanguageSelector from "../../components/LanguageSelector";
import QueryParameters from "../../components/QueryParameters";
import ResultsTable from "../../components/Results";
import "./home.scss";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="home">
      <LanguageSelector />
      <div className="query">
        <div className="left">
          <DragAndDrop />
        </div>
        <div className="right">
          <QueryParameters />
        </div>
      </div>
      <div className="results">
        <ResultsTable />
      </div>
    </div>
  );
};

export default Home;

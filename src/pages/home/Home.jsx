import { Spin } from "antd";
import { useState } from "react";
import LanguageSelector from "../../components/LanguageSelector";
import RequestForm from "../../components/RequestForm";
import ResultsTable from "../../components/Results";
import "./home.scss";

const Home = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const dataObjectUrl = import.meta.env.VITE_DATAOBJECT_API_URL;
  const labelDetectorUrl = import.meta.env.VITE_LABELDETECTOR_API_URL;

  const handleFormSubmit = async (formData) => {
    setLoading(true);

    formData.append("filename", formData.get("file").name);

    try {
      const uploadResponse = await fetch(dataObjectUrl + "upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Upload failed");
      }

      const uploadData = await uploadResponse.json();

      const getUrlResponse = await fetch(
        `${dataObjectUrl}publish?remoteFullPath=${encodeURIComponent(
          uploadData.remoteFullPath
        )}`
      );

      if (!getUrlResponse.ok) {
        throw new Error("Publication Failed");
      }

      const getUrlData = await getUrlResponse.json();
      const url = getUrlData;

      const finalResponse = await fetch(labelDetectorUrl + "analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          remoteFullPath: url,
          maxLabels: formData.get("maxLabels"),
          minConfidence: formData.get("minConfidence"),
        }),
      });

      if (!finalResponse.ok) {
        throw new Error("`Analyze failed");
      }

      const finalData = await finalResponse.json();
      setResults(finalData);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="home">
      {loading && (
        <div className="loading-overlay">
          <Spin size="large" />
        </div>
      )}
      <LanguageSelector />
      <div className="query">
        <RequestForm onSubmit={handleFormSubmit} />
      </div>
      <div className="results">
        <ResultsTable labels={results} />
      </div>
    </div>
  );
};

export default Home;

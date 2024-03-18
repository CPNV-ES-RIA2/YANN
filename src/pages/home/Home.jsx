import { Form } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import DragAndDrop from "../../components/Dragger";
import LanguageSelector from "../../components/LanguageSelector";
import QueryParameters from "../../components/QueryParameters";
import ResultsTable from "../../components/Results";
import "./home.scss";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [message, setMessage] = useState("");
  const [results, setResults] = useState([]);
  const dataObjectUrl = import.meta.env.VITE_DATAOBJECT_API_URL;
  const labelDetectorUrl = import.meta.env.VITE_LABELDETECTOR_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
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
      setMessage(uploadData.message);

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
  };

  return (
    <div className="home">
      <LanguageSelector />
      <div className="query">
        <Form onSubmitCapture={handleSubmit} encType="multipart/form-data">
          <div className="left">
            <DragAndDrop />
          </div>
          <div className="right">
            <QueryParameters />
          </div>
        </Form>
      </div>
      <div className="results">
        <ResultsTable labels={results} />
      </div>
    </div>
  );
};

export default Home;

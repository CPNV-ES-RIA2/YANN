import React, { useState } from "react";
//import "./dragger.css";

function DragAndDrop() {
  const fileInputRef = React.createRef();
  const [fileUri, setFileUri] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const localPath = URL.createObjectURL(file);
    setFileUri(localPath);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      onClick={handleClick}
      className="dragger-container"
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dashed #aaa",
        borderRadius: "4px",
        padding: "20px",
        backgroundColor: "#f3f3f3",
        color: "#aaa",
        cursor: "pointer",
      }}
    >
      <input
        type="file"
        name="file"
        ref={fileInputRef}
        required={true}
        onChange={handleUpload}
        style={{ display: "none" }}
      />
      {!fileUri && <span>Click to Upload an Image</span>}
      {fileUri && (
        <img
          src={fileUri}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="Uploaded content"
        />
      )}
    </div>
  );
}

export default DragAndDrop;

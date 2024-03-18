import React, { useState } from "react";
import "./dragger.scss";

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
    <div onClick={handleClick} className="dragger-container">
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

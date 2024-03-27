import { Form } from "antd";
import React from "react";
import DragAndDrop from "./Dragger";
import QueryParameters from "./QueryParameters";

export default function RequestForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    onSubmit(formData);
  };

  return (
    <Form
      onSubmitCapture={handleSubmit}
      className="request-form"
      encType="multipart/form-data"
    >
      <div className="left">
        <DragAndDrop />
      </div>
      <div className="right">
        <QueryParameters />
      </div>
    </Form>
  );
}

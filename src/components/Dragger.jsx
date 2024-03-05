import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { useTranslation } from "react-i18next";

const { Dragger } = Upload;

function DragAndDrop() {
  const { t } = useTranslation();

  return (
    <Dragger accept="images/*" maxCount={1}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">{t("dragger.uploadText")}</p>
      <p className="ant-upload-hint">{t("dragger.uploadHint")}</p>
    </Dragger>
  );
}

export default DragAndDrop;

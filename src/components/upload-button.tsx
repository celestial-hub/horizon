"use client";

import React, { ChangeEvent } from "react";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";

const UploadButton: React.FC = () => {
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target?.result as string;
      console.log(content);
    };

    reader.readAsText(file);
  };

  return (
    <Button
      className="bg-blue-600 text-lg data-[hover=true]:bg-blue-700"
      radius="sm"
      endContent={<FontAwesomeIcon icon={faUpload} />}
    >
      <span>Upload</span>
      <input type="file" onChange={handleFileUpload} className="hidden" />
    </Button>
  );
};

export default UploadButton;

import React from "react";
import { useDropzone } from "react-dropzone";
import { Input } from "./input";

const FileUploader = ({ onFileUpload }) => {
  const onDrop = (acceptedFiles) => {
    onFileUpload(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="border-dashed border-2 border-gray-300 my-2 p-6 rounded-lg cursor-pointer flex flex-col items-center justify-center text-gray-500"
    >
      <Input {...getInputProps()} />
      <div className="text-center">
        <div className="mb-2">
          <svg
            className="w-10 h-10 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16V7a4 4 0 114 4h1l2-2a2 2 0 112 2l-3 3 3 3-2 2-4-4h-1a4 4 0 01-4 4v-2m0-6l-4 4m16-4l-4 4m-6 0h.01"
            />
          </svg>
        </div>
        <p className="mb-1">Click to upload or drag and drop</p>
        <p className="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
      </div>
    </div>
  );
};

export default FileUploader;

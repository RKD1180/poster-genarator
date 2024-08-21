import FileUploader from "@/components/ui/FileUploader";
import { Bold, Italic, Underline } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";

const Preview = () => {
  const [file, setFile] = useState(null);
  const [heading, setHeading] = useState({
    positon: "left",
    text: "",
    color: "black",
  });
  const [desc, setDesc] = useState("");
  const [contentType, setContentType] = useState({
    heading: false,
    image: false,
    description: false,
  });
  const handleFileUpload = (uploadedFile) => {
    setFile(URL.createObjectURL(uploadedFile));
  };
  const getText = (e) => {
    setHeading({ ...heading, text: e.target.value });
  };
  const getDesText = (e) => {
    setDesc(e.target.value);
  };
  const handleDownload = () => {
    const element = document.getElementById("capture");

    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = "preview.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };
  return (
    <div className="grid grid-cols-12 gap-4 m-3">
      <div className="col-span-6 border border-dashed border-purple-700 rounded h-fit ">
        <div className="flex justify-center my-5">
          <div className="shadow-lg w-2/4 p-5 rounded">
            <h2 className="font-bold text-center">Components</h2>
          </div>
        </div>
        <h2 className="font-bold text-center my-3">Items</h2>
        {contentType?.heading && (
          <div className="border rounded m-3 p-5">
            <div className="flex justify-end">
              <h2
                className="shadow-xl bg-white rounded px-2 text-red-600 cursor-pointer"
                onClick={() =>
                  setContentType({ ...contentType, heading: false })
                }
              >
                X
              </h2>
            </div>
            <p className="py-2">Heading</p>
            <Input placeholder="Dashboard" change={getText} />
            <div className="flex justify-between my-2">
              <div className="border rounded">
                <ToggleGroup type="single">
                  <ToggleGroupItem
                    onClick={() => {
                      setHeading({ ...heading, positon: "left" });
                    }}
                    value="bold"
                    aria-label="Toggle bold"
                  >
                    <h2 className="font-bold">Left</h2>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    onClick={() => {
                      setHeading({ ...heading, positon: "center" });
                    }}
                    value="italic"
                    aria-label="Toggle italic"
                  >
                    <h2 className="font-bold">Center</h2>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="underline"
                    onClick={() => {
                      setHeading({ ...heading, positon: "right" });
                    }}
                    aria-label="Toggle underline"
                  >
                    <h2 className="font-bold">Right</h2>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="border rounded">
                <ToggleGroup type="single">
                  <ToggleGroupItem
                    onClick={() => {
                      setHeading({ ...heading, color: "blue" });
                    }}
                    value="bold"
                    aria-label="Toggle bold"
                  >
                    <h2 className="font-bold">Blue</h2>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    onClick={() => {
                      setHeading({ ...heading, color: "black" });
                    }}
                    value="italic"
                    aria-label="Toggle italic"
                  >
                    <h2 className="font-bold">Black</h2>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    onClick={() => {
                      setHeading({ ...heading, color: "green" });
                    }}
                    value="underline"
                    aria-label="Toggle underline"
                  >
                    <h2 className="font-bold">Greeen</h2>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>
        )}

        {contentType?.image && (
          <div className="border rounded m-3 p-5">
            <div className="flex justify-end">
              <h2
                className="shadow-xl bg-white rounded px-2 text-red-600 cursor-pointer"
                onClick={() => {
                  setFile(null);
                  setContentType({ ...contentType, image: false });
                }}
              >
                X
              </h2>
            </div>
            {/* File Uploader Section */}
            <FileUploader onFileUpload={handleFileUpload} />
          </div>
        )}

        {contentType?.description && (
          <div className="border rounded m-3 p-5">
            <div className="flex justify-end">
              <h2
                className="shadow-xl bg-white rounded px-2 text-red-600 cursor-pointer"
                onClick={() =>
                  setContentType({ ...contentType, description: false })
                }
              >
                X
              </h2>
            </div>
            <p className="py-2">Description</p>
            <Textarea change={getDesText} placeholder="Dashboard" />
          </div>
        )}
        <div className="flex justify-center w-full px-2 gap-2 my-3">
          {!contentType?.heading && (
            <div
              className="bg-yellow-400 text-center font-bold cursor-pointer py-2 rounded w-full"
              onClick={() => {
                setContentType({
                  ...contentType,
                  heading: !contentType.heading,
                });
              }}
            >
              Heading
            </div>
          )}
          {!contentType?.image && (
            <div
              className="bg-green-200 text-center font-bold py-2 rounded w-full cursor-pointer"
              onClick={() => {
                setContentType({
                  ...contentType,
                  image: !contentType.image,
                });
              }}
            >
              Image
            </div>
          )}
          {!contentType?.description && (
            <div
              className="bg-blue-300 text-center font-bold py-2 rounded w-full  cursor-pointer"
              onClick={() => {
                setContentType({
                  ...contentType,
                  description: !contentType.description,
                });
              }}
            >
              Description
            </div>
          )}
        </div>
      </div>
      <div className="col-span-6 border border-dashed border-purple-700 rounded h-fit">
        {/* left side element */}
        <div className="m-5" id="capture">
          <div className="">
            <h2
              className="font-bold text-[40px]"
              style={{
                textAlign: `${heading?.positon}`,
                color: `${heading?.color}`,
              }}
            >
              {heading?.text}
            </h2>
          </div>
          <div className="my-2">
            {file && (
              <div className="mt-4">
                <img
                  src={file}
                  alt="Preview"
                  className="mx-auto mt-2 border border-gray-300 rounded"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            )}
          </div>
          <div className="my-3">
            <p className="text-[20px]">{desc}</p>
          </div>
        </div>
        <div className="m-5">
          <Button onClick={handleDownload}>Download</Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;

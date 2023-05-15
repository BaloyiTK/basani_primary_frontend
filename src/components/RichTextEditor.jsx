import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import api_endpoint from "../utils/config";
import axios from "axios";

function RichTextEditor({ For }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (For === "history") {
      const fetchHistory = async () => {
        try {
          const response = await axios.get(`${api_endpoint}/api/history`);

          setContent(response.data.history[0].content);
        } catch (error) {
          console.log(error);
        }
      };
      fetchHistory();
    }

    if (For === "admission") {
      const fetchAdmission = async () => {
        try {
          const response = await axios.get(`${api_endpoint}/api/admission`);

          setContent(response.data.admission[0].content);
        } catch (error) {
          console.log(error);
        }
      };
      fetchAdmission();
    }
  }, [For]);

  const handleContentSubmit = async () => {
    // code to submit the content goes here

    if (For === "history") {
      await axios
        .patch(`${api_endpoint}/api/history`, { content: content })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (For === "admission") {
      await axios
        .patch(`${api_endpoint}/api/admission`, { content: content })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background",
  ];

  return (
    <div className="w-full mx-auto my-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl mx-auto">
        <ReactQuill
          className="w-full border-gray-300 border-2 rounded-lg p-4 bg-white"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleContentSubmit}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default RichTextEditor;

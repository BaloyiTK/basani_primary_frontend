import React from "react";
import RichTextEditor from "./RichTextEditor";

const History = () => {
  return (
    <div>
      <h2 className="flex justify-center text-2xl font-bold text-gray-800 mb-4" id="history">
        School history
      </h2>
      <RichTextEditor For="history" />
    </div>
  );
};

export default History;

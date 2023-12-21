import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./styles/TemplateLoader.css";
import { FaRegFilePdf } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const TemplateLoader = (props) => {
  return (
    <div className="template-loader">
      <button className="clear-resume" onClick={props.deleteAll}>
        <FaTrashAlt />
        Delete All
      </button>
      <button className="download" onClick={props.onDownload}>
        <FaRegFilePdf /> Download
      </button>
    </div>
  );
};

export default TemplateLoader;

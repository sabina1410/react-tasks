import React from "react";
import "./App.css";

function CustomButton({ text, warnMessage, hint }) {
  const handleClick = () => {
    if (warnMessage) {
      alert(warnMessage);
    }
  };

  return (
    <button
      className={`custom-button ${warnMessage ? "warn" : ""}`}
      onClick={handleClick}
      title={hint || ""}
    >
      <span className={hint ? "hint-text" : ""}>{text}</span>
    </button>
  );
}

export default CustomButton;

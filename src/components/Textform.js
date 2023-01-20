import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function Textform(props) {
  const handleUpCaseClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoCaseClick = () => {
    // console.log("LowerCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleCopy = () => {
    // console.log("Copy Button was Clicked" + text);
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to Clipboard", "success");
  };

  const handleExtraSpace = () => {
    // console.log("Extra Space Remove" + text);
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "success");
  };

  const handleResetClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Area Reset", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  // text = "new text"; // wrong way to change the state
  // setText ("new text here"); // correct way to change the state
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-2">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212629" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpCaseClick}
        >
          {" "}
          Convert to Uppercase{" "}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoCaseClick}
        >
          {" "}
          Convert to Lowercase{" "}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          {" "}
          Copy Text{" "}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
        >
          {" "}
          Remove Extra Space{" "}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleResetClick}
        >
          {" "}
          Reset{" "}
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((e) => {
              return e.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview Text</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}

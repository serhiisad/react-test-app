import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import "./NewsAdder.css";
//const db_url = require("../db/news.json");
import jsonDB from "../db/news.json";
// const writeJsonFile = require("write-json-file");
const json_url = "../db/news.json";

function useInputsValue(defaultValue = "") {
  const [redirected, setRedirected] = useState(false);
  const [titlevalue, setTitleValue] = useState(defaultValue);
  const [contentvalue, setContentValue] = useState(defaultValue);

  return {
    bind: {
      titlevalue,
      contentvalue,
      // redirected,
      onChange: (event) => {
        setTitleValue(event.target.value);
        setContentValue(event.target.value);
      },
    },
    clear: () => {
      setTitleValue("");
      setContentValue("");
    },
    redirect: () => {
      setRedirected(true);
    },
    //??
    value: () => {
      // console.log("VALUE", { titlevalue, contentvalue });
      return { titlevalue, contentvalue, redirected };
    },
  };
}
// function onCreatePost(_values) {
//   // let reader = new FileReader()
//   // reader.readAsText(jsonDB)
//   let updated_data = jsonDB.push(useInputsValue().value());
//   // writeJsonFile()
// }
function RenderRedirectElem() {
  if (useInputsValue().value().redirected) {
    return <Redirect to="/" />;
  } else return null;
}

function NewsAdder(/*{OnCreatePost}*/) {
  const inputs = useInputsValue("");

  function onCreatePost(_values) {
    let updated_data = jsonDB.push({
      title: inputs.value().titlevalue,
      content: inputs.value().contentvalue,
    });
    console.log(jsonDB);
    
    // writeJsonFile(json_url, updated_data)
    //   .then((data) => {
    //     console.log("JSON was updated");
    //     console.log(data);
    //   })
    //   .catch((err) => console.error("Error writing JSON" + err));
    return <Redirect to="/" />;
  }

  function submitHandler(event) {
    event.preventDefault();
    let values = inputs.value();

    if (values.titlevalue.trim() && values.contentvalue.trim()) {
      onCreatePost(values);
      inputs.clear(); //???
      //this.props.history.push("/");
      inputs.redirect();
    }
  }

  return (
    <form className="adder-form" onSubmit={submitHandler}>
      {/* <RenderRedirectElem /> */}
      <input {...inputs.bind} type="text" placeholder="post title" required />
      <textarea rows="4" cols="50" placeholder="post content..."></textarea>
      {/* <button type="submit" onClick={this.setRedirected}> */}
      <button type="submit">Add post</button>
    </form>
  );
}

// NewsAdder.PropTypes = {};

export default NewsAdder;

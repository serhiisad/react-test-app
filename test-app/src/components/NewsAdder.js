import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import "./NewsAdder.css";

//TODO add news from json db
function useInputsValue(defaultValue = "") {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  return {
    bind: {
      titleValue,
      contentValue,
      onChange: (event) => {
        setTitleValue(event.target.value);
        setContentValue(event.target.value);
      },
    },
    clear: () => {
      setTitleValue("");
      setContentValue("");
    },
    //??
    value: () => {
      return { titleValue, contentValue };
    },
  };
}

function NewsAdder({ OnCreatePost }) {
  const inputs = useInputsValue();

  function submitHandler(event) {
    event.preventDefault();

    let values = inputs.value();
    if (values.titleValue.trim() && values.contentValue.trim()) {
      onCreatePost(values);
      inputs.clear();
    }
  }

  return (
    <form className="adder-form" onSubmit={submitHandler}>
      <input {...inputs.bind} type="text" placeholder="post title" required />
      <textarea rows="4" cols="50" placeholder="post content..."></textarea>
      <button type="submit">Add post</button>
    </form>
  );
}

// NewsAdder.PropTypes = {};

export default NewsAdder;

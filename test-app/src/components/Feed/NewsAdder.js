import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
// import { Redirect } from "react-router-dom";
import "./NewsAdder.css";
import { useHistory } from "react-router";
import { addPost, loadPosts } from "../../redux-store/actionCreators";
import store from "../../redux-store/store";

function useInputsValue(defaultValue = "") {
  const [titlevalue, setTitleValue] = useState(defaultValue);
  const [contentvalue, setContentValue] = useState(defaultValue);

  return {
    bindTitleInput: {
      titlevalue,
      onChange: (event) => setTitleValue(event.target.value),
    },
    bindContentInput: {
      contentvalue,
      onChange: (event) => setContentValue(event.target.value),
    },
    clearTitle: () => {
      setTitleValue("");
    },
    clearContent: () => {
      setContentValue("");
    },
    //??
    value: () => {
      return { titlevalue, contentvalue };
    },
  };
}

function NewsAdder(props) {
  const history = useHistory();
  const inputs = useInputsValue("");

  store.subscribe(() => {
    const state = store.getState();
    console.log("STATE", state);
  });

  // function onCreatePost(_values) {
  //   //setTimeout(function () {
  //   // jsonDB.push({
  //   //   title: inputs.value().titlevalue,
  //   //   content: inputs.value().contentvalue,
  //   // });
  //   //console.log(jsonDB);
  //   // store.dispatch(loadPosts());
  //   // store.dispatch(
  //   //   addPost({ title: _values.titlevalue, content: _values.contentvalue })
  //   // );
  //   //}, 2000);
  // }

  function SubmitHandler(event) {
    event.preventDefault();
    let values = inputs.value();
    if (values.titlevalue.trim() && values.contentvalue.trim()) {
      console.log("TRUE");
      store.dispatch(
        addPost({
          id: store.getState().posts.length + 1,
          title: values.titlevalue,
          content: values.contentvalue,
        })
      );
      history.push("/");
      //TODO fix
      // inputs.clearContent();
      // inputs.clearTitle();
      //
    }
  }

  return (
    <form className="adder-form" onSubmit={SubmitHandler}>
      <input
        {...inputs.bindTitleInput}
        type="text"
        placeholder="post title"
        required
      />
      <textarea
        {...inputs.bindContentInput}
        rows="4"
        cols="50"
        placeholder="post content..."
      ></textarea>

      {/* <button type="submit" onClick={() => props.history.push("/")}>
        Add post
      </button> */}
      <button className="submitBtn" type="submit">
        Add post
      </button>
    </form>
  );
}

// NewsAdder.PropTypes = {};
export default NewsAdder;

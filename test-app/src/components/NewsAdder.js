import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import "./NewsAdder.css";

//TODO add news from json db
function NewsAdder() {
  return (
    <form className="adder-form">
      <input type="text" placeholder="post title" required />
      <textarea rows="4" cols="50" placeholder="post content..."></textarea>
      <button type="submit">Add post</button>
    </form>
  );
}

// NewsAdder.PropTypes = {};

export default NewsAdder;

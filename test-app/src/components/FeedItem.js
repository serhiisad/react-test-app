import React, { useState, useContext, useEffect } from "react";

function FeedItem(props) {
  return (
    <div className="post">
      <h1 className="post-header">{props.title}</h1>
      <p className="post-contents">{props.content}</p>
    </div>
  );
}

export default FeedItem;

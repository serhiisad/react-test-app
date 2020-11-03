import React, { useState, useContext, useEffect } from "react";
import "./FeedItem.css";

function FeedItem({ post }) {
  return (
    <div className="post">
      <h1 className="post-header">{post.title}</h1>
      <p className="post-contents">{post.content}</p>
    </div>
  );
}

export default FeedItem;

import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { title } from "process";
import FeedItem from "./FeedItem";
import Loader from "./Loader";

const jsonDb = require("../db/news.json");

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch(jsonDb)
    //   .then((res) => res.json())
    //   .then((posts) => {
    //     console.log("POSTS", posts);
    //     posts.forEach((post) => {
    //       let item = JSON.parse(post);
    //       console.log(item);
    //       setPosts(
    //         posts.concat([{ title: item.title, content: item.content }])
    //       );
    //       setLoading(false);
    //     });
    //   })
    //   .catch((err) => console.error("ERROR", err));

    setTimeout(() => {
      // jsonDb.forEach((post) => {
      //   //console.log("POST", post);
      //   //setPosts(posts.concat([{ title: post.title, content: post.content }]));
      // });
      //  jsonDb.map((post) => {
      //    console.log(post);
      //    return { title: post.title, content: post.content };
      //  });
      //console.log(jsonDb);
      setPosts(() => jsonDb);
      setLoading(false);
      //console.log("POSTS", posts.length, posts);
    }, 1000);
  }, []);

  return (
    <div className="feed">
      {loading && <Loader />}
      {posts.map((post, index) => {
        return <FeedItem post={post} key={index + "sad"} index={index} />;
      })}
    </div>
  );
}

// Feed.PropTypes = {};
export default Feed;

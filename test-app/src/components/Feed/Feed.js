import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import FeedItem from "./FeedItem";
import { deletePost, loadPosts } from "../../redux-store/actionCreators";
import store from "../../redux-store/store";
import Modal from "../Modal/ModalDelete";
import { useSelector } from "react-redux";
import Loader from "./Loader";

import "./Feed.css";

import Context from "../../context";

function Feed() {
  const [loading, setLoading] = useState(true);
  const posts = useSelector((state) => state.posts);

  // *modal
  let [showModal, setShowModal] = useState(false);
  let [delElemID, setDelElemID] = useState(0);

  const handlePayload = (id) => {
    setDelElemID(id);
  };

  const handleModalOpen = () => {
    console.log("Modal Opened!");
    setShowModal(true);
  };

  const handleModalAction = (confirm) => {
    console.log("modal action invoked");
    if (confirm) store.dispatch(deletePost(delElemID));
    setShowModal(false);

    //todo: delete from redux
  };

  useEffect(() => {
    setTimeout(() => {
      // setPosts(() => jsonDb);
      //dispatching action on load
      setLoading(false);
    }, 500);
  }, []);
  // store.subscribe(() => {
  //   const state = store.getState();
  //   setPosts(state.posts);
  // });

  console.log("Modal_isOpen: ", showModal);

  return (
    <div className="feed">
      <Modal showModal={showModal} handleResponse={handleModalAction} />

      {
        loading ? (
          <Loader />
        ) : /*!showModal ?*/ posts.length ? (
          posts.map((post, index) => {
            return (
              <FeedItem
                post={post}
                key={index + "123sad"}
                index={index}
                callModal={handleModalOpen}
                setPayload={handlePayload}
              />
            );
          })
        ) : (
          <div className="emptyFeedContainer">No Posts!</div>
        ) /* : null */
      }
    </div>
  );
}

export default Feed;

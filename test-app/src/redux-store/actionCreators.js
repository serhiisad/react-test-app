import { ADD_POST, DELETE_POST, LOAD_POSTS } from "./actionTypes";

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post,
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: id,
  };
}

export function loadPosts(all_posts) {
  return {
    type: LOAD_POSTS,
    payload: all_posts,
  };
}

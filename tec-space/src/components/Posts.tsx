import React from "react";
import { Post } from "../models/interfaces/Post";

const Posts = ({ posts }: { posts: Array<Post> }) => {
  return (
    <>
      <h5>Teste</h5>
      {posts.map((post) => (
        <h1>{post.content}</h1>
      ))}
    </>
  );
};

export default Posts;

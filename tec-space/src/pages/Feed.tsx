import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Post } from "../models/interfaces/Post";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/FirebaseConection";
import { ColletionsFirebase } from "../models/enums/ColletionsFirebase";
import Posts from "../components/Posts";

const Feed = () => {
  const [postList, setPostList] = useState<Array<Post>>([]);

  const handleGetPost = async (): Promise<void> => {
    const postArray: Array<DocumentData> = [];
    const postsListColletion = collection(db, ColletionsFirebase.POSTS);

    await getDocs(postsListColletion)
      .then((response) => {
        if (response) {
          for (const post of response.docs) {
            postArray.push(post.data());
          }
          postArray.length > 0 && setPostList(postArray as Array<Post>);
          console.log(postArray);
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    void handleGetPost();
  }, []);

  return (
    <>
      <NavBar handleGetPosts={handleGetPost} />
      <Posts posts={postList} />
    </>
  );
};

export default Feed;

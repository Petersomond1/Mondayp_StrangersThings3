import { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";

const COHORT_NAME = '2302-ACC-ET-WEB-PT-E'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export default function Posts () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
            `${BASE_URL}/posts`
        );
        const result = await response.json();
        console.log(result);
        setPosts(result.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <> 
<div>
      <h1><SignUpForm>SignUpForm()</SignUpForm></h1>
</div>
    <div>
      <h1>Stranger's Things</h1>
      <h2>Posts</h2>
      {posts.length>0 && posts.map((post) => {
        return (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>{post.price}</p>
            <p>{post.location}</p>
            <p>{post.willDeliver}</p>
            <p>{post.author.username}</p>
          </div>
          
          
          
          
          
          
          
          
          
          )
      })}
    </div>
    </> );
  
}

// export default function Posts () {
//     return (
//       <div className="posts">
//         <h1>Posts</h1>
//       </div>
//     );
//   }
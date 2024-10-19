// 'use client';
// import { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';
// import Likes from '../components/likes';

// const PostDetail = ({ params }) => {
//   const { id } = params;
//   const [post, setPost] = useState(null);

//   const fetchPost = useCallback(async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
//       setPost(response.data.post);
//     } catch (error) {
//       console.error('Error fetching post:', error);
//     }
//   }, [id]);

//   useEffect(() => {
//     fetchPost();
//   }, [fetchPost]);

//   if (!post) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{post.content}</h2>
//       <Likes postId={post.id} />
//     </div>
//   );
// };

// export default PostDetail;












import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Likes from '../components/likes';

const PostDetail = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null); // State for error handling

  const fetchPost = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
      setPost(response.data.post);
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Error fetching post. Please try again later.'); // Set error message
    }
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (error) return <p>{error}</p>;
  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.content}</h2>
      <Likes postId={post.id} />
    </div>
  );
};

export default PostDetail;

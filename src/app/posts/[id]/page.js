"use client"

import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const PostDetail = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const fetchPost = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
      setPost(response.data.post);
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Error fetching post. Please try again later.');
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
    </div>
  );
};

export default PostDetail;

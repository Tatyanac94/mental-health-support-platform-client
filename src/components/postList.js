"use client"

import React, { useState, useEffect } from 'react'; 
import axios from '../utils/axios';
import PostItem from '../components/postItem';

const PostList = ({ forumId }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`/forums/${forumId}/posts`);
                console.log('Posts response:', response.data); // Log the response
                setPosts(response.data); // Adjust if response.data is nested
            } catch (error) {
                console.error("Error fetching posts:", error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        
        if (forumId) {
            fetchPosts();
        }
    }, [forumId]); // Only re-run when forumId changes

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching posts: {error.message}</div>;

    return (
        <div>
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))
            )}
        </div>
    );
};

export default PostList;

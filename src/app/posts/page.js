"use client"

import React, { useState } from 'react';
import PostList from '../../components/postList';
import CreatePost from '../../components/postForm';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    const handlePostCreated = (newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">Posts</h2>
            <CreatePost onPostCreated={handlePostCreated} />
            <PostList posts={posts} />
        </div>
    );
};

export default PostsPage;

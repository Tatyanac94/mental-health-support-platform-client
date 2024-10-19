"use client";

import React, { useEffect, useState } from 'react';
import PostList from '../../../components/postList';
import CreatePost from '../../../components/postForm';
import { useParams } from 'next/navigation';
import axios from '../../../utils/axios';

const ForumDetailPage = () => {
    const { id } = useParams();
    const [forum, setForum] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchForumDetails = async () => {
            try {
                const response = await axios.get(`/forums/${id}`);
                setForum(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchForumDetails();
    }, [id]);

    if (error) return <div>Error fetching forum details: {error}</div>;
    if (!forum) return <div>Loading forum details...</div>;

    const handlePostCreated = (newPost) => {
        console.log('New post created:', newPost);
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">{forum.name}</h2>
            <p>{forum.description}</p>
            <h3 className="text-xl mt-4">Create a new post:</h3>
            <CreatePost 
                onPostCreated={handlePostCreated} 
                forumId={id} 
            /> 
            <h3 className="text-xl mt-4">Posts:</h3>
            <PostList forumId={id} />
        </div>
    );
};

export default ForumDetailPage;








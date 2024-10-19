"use client";

import React, { useEffect, useState } from 'react';
import ForumList from '../../components/forumList';
import ForumForm from '../../components/forumForm';
import axios from '../../utils/axios';

const ForumsPage = () => {
    const [forums, setForums] = useState([]);

    const fetchForums = async () => {
        try {
            const response = await axios.get('/forums');
            setForums(response.data);
        } catch (error) {
            console.error('Error fetching forums:', error);
        }
    };

    useEffect(() => {
        fetchForums();
    }, []);

    const handleForumCreated = (newForum) => {
        setForums((prevForums) => [newForum, ...prevForums]); // Add new forum to the top
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">Forums</h2>
            <ForumForm onForumCreated={handleForumCreated} />
            <ForumList forums={forums} />
        </div>
    );
};

export default ForumsPage;

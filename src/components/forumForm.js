"use client";
import React, { useState } from 'react';
import axios from '../utils/axios';

const ForumForm = ({ onForumCreated }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/forums', { name, description });
            onForumCreated(response.data); 
            setName('');
            setDescription('');
        } catch (error) {
            console.error('Error creating forum:', error);
        }
    };

   
    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <label htmlFor="forum-name" className="sr-only">Forum Name</label>
            <input
                id="forum-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Forum Name"
                className="w-full p-2 border rounded text-black"
                required
            />
            <label htmlFor="forum-description" className="sr-only">Forum Description</label>
            <textarea
                id="forum-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Forum Description"
                className="w-full p-2 border rounded mt-2 text-black"
                required
            />
            <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
                Create Forum
            </button>
        </form>
    );
};

export default ForumForm;
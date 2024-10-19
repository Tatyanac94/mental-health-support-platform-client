"use client";
import React from 'react';
import ForumItem from '../components/forumItem';

const ForumList = ({ forums }) => {
    const validForums = Array.isArray(forums) ? forums.filter(forum => forum && forum.id) : [];

    if (validForums.length === 0) return <p>No forums available.</p>;

    const sortedForums = validForums.sort((a, b) => b.id - a.id);

    return (
        <div className="space-y-4">
            {sortedForums.map((forum) => (
                <ForumItem key={forum.id} forum={forum} />
            ))}
        </div>
    );
};

export default ForumList;
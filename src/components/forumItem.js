import React from 'react';
import Link from 'next/link';

const ForumItem = ({ forum }) => {
    return (
        <div className="p-4 border rounded bg-white shadow">
            <h3 className="font-bold text-black underline">{forum.name}</h3>
            <p className="text-black">{forum.description}</p>
            <Link href={`/forums/${forum.id}`}>
                <a className="mt-2 text-blue-500 hover:underline">View Posts</a>
            </Link>
        </div>
    );
};

export default ForumItem;

import React, { useState } from 'react';
import Comments from '../components/comments';

const PostItem = ({ post }) => {
    const [showComments, setShowComments] = useState(false);

    return (
        <div className="p-4 border rounded border-blue-500 bg-white shadow text-black mb-2">
            <h2 className="text-lg font-bold">{post.content}</h2>
            <h4 className="font-semibold">{post.username || 'Anonymous'}</h4> 
            <p className="text-gray-500 text-sm">{new Date(post.timestamp).toLocaleString()}</p>
            <button onClick={() => setShowComments((prev) => !prev)} className="mt-2">
                {showComments ? 'Hide Comments' : 'View Comments'}
            </button>
            {showComments && <Comments postId={post.id} />}
        </div>
    );
};

export default PostItem;
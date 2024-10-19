import React, { useState } from 'react';
import Comments from '../components/comments';

const PostItem = ({ post }) => {
    const [showComments, setShowComments] = useState(false);

    return (
        <div className="p-4 border rounded bg-white shadow text-black mb-4">
            <h2 className="text-lg font-bold">{post.content}</h2>
            <button onClick={() => setShowComments((prev) => !prev)} className="mt-2">
                {showComments ? 'Hide Comments' : 'View Comments'}
            </button>
            {showComments && <Comments postId={post.id} />}
        </div>
    );
};

export default PostItem;
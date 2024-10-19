import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`/comments/posts/${postId}/comments`);
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [postId]);

    const handleAddComment = async () => {
        if (!newComment) return;

        try {
            const response = await axios.post(`/comments/posts/${postId}/comments`, {
                content: newComment,
            });
            setComments((prevComments) => [...prevComments, response.data]);
            setNewComment('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div className="text-black">
            <h3>Comments</h3>
            <div>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                />
                <button onClick={handleAddComment}>Submit</button>
            </div>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <p>{comment.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
